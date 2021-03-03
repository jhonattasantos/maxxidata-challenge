import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ProfessionalType } from '../../professional-type/professional-type.entity';

export class CreateProfessional {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly telephone: string;

  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiPropertyOptional()
  readonly situation?: boolean;

  @ApiProperty()
  readonly typeOfProfessional: ProfessionalType;
}
