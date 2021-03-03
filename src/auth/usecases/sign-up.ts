import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUp {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  readonly name: string;

  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  readonly password: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  readonly passwordConfirmation: string;
}
