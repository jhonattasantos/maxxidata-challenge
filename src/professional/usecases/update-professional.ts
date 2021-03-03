import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProfessional {
  @ApiPropertyOptional()
  readonly name?: string;

  @ApiPropertyOptional()
  readonly telephone?: string;

  @ApiPropertyOptional()
  readonly email?: string;

  @ApiPropertyOptional()
  readonly situation?: boolean;

  @ApiPropertyOptional()
  readonly typeOfProfessional?: string;
}
