import {
  Injectable,
  InternalServerErrorException,
  PreconditionFailedException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUp } from './usecases/sign-up';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { UserRepository } from '../users/users.repository';
import { SignIn } from './usecases/SignIn';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(signUp: SignUp) {
    const { password, passwordConfirmation } = signUp;
    if (password !== passwordConfirmation) {
      throw new PreconditionFailedException('password errado');
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const confirmationToken = await crypto.randomBytes(32).toString('hex');

    const { name, email } = signUp;

    const user = this.userRepository.create({
      name,
      email,
      password: passwordHash,
      salt,
      confirmationToken,
    });

    try {
      await this.userRepository.save(user);
      delete user.password;
      delete user.salt;
      return user;
    } catch (error) {
      if (error.routine == '_bt_check_unique') {
        throw new PreconditionFailedException('Usuario já cadastrado');
      }

      throw new InternalServerErrorException('error ao salvar usuario');
    }
  }

  async signIn(signIn: SignIn) {
    const { email, password } = signIn;
    const user = await this.userRepository.findOne({ email });

    if (!user || !(await user.checkPassword(password))) {
      throw new UnauthorizedException('Não autorizado');
    }

    const jwtPayload = {
      id: user.id,
    };

    const token = await this.jwtService.sign(jwtPayload);

    return { token };
  }
}
