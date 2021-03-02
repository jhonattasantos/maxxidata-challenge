import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
  MinLength,
} from 'class-validator';

export class CreateProfessional {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  readonly name: string;
  @IsString()
  @Length(10, 11)
  readonly telephone: string;
  @IsEmail()
  readonly email: string;
  readonly situation?: boolean;
  @IsUUID()
  readonly professionalType: string;
}
