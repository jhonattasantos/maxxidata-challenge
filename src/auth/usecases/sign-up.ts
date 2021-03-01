import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class SignUp {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  readonly name: string;
  @IsEmail()
  readonly email: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  readonly password: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  readonly passwordConfirmation: string;
}
