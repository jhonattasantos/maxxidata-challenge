import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class SignIn {
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly password: string;
}
