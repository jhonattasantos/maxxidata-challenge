import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { SignUp } from './usecases/sign-up';
import { AuthService } from './auth.service';
import { SignIn } from './usecases/SignIn';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body(ValidationPipe) signUp: SignUp) {
    return await this.authService.signUp(signUp);
  }
  @Post('sign-in')
  async signIn(@Body(ValidationPipe) signIn: SignIn) {
    return await this.authService.signIn(signIn);
  }
}
