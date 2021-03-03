import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfessionalType {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  readonly description: string;
}
