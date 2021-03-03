import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfessionalType {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  readonly description: string;

  @ApiProperty()
  readonly situation?: boolean;
}
