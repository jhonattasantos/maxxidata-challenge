import {
  Body,
  Controller,
  Get,
  Post,
  ValidationPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { SignUp } from './usecases/sign-up';
import { AuthService } from './auth.service';
import { SignIn } from './usecases/SignIn';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@ApiResponse({ status: 401, description: 'Unauthorized' })
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiResponse({ status: 201, description: 'Created' })
  @ApiOperation({ summary: 'sign-up' })
  @Post('sign-up')
  async signUp(@Body(ValidationPipe) signUp: SignUp) {
    return await this.authService.signUp(signUp);
  }

  @ApiResponse({ status: 201, description: 'Created' })
  @ApiOperation({ summary: 'sign-in' })
  @Post('sign-in')
  async signIn(@Body(ValidationPipe) signIn: SignIn) {
    return await this.authService.signIn(signIn);
  }

  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiOperation({ summary: 'Auth me' })
  @Get('me')
  @UseGuards(AuthGuard())
  async me(@Req() req) {
    return req.user;
  }
}
