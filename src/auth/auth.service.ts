import {
  Injectable,
  InternalServerErrorException,
  PreconditionFailedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUp } from './usecases/sign-up';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { UserRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
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
}
