import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateProfessionalType {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  readonly description: string;
}
