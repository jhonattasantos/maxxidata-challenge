import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateProfessionalType {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  readonly description: string;
}
