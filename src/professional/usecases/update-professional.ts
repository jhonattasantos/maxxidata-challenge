import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ProfessionalType } from '../../professional-type/professional-type.entity';

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
  readonly typeOfProfessional?: ProfessionalType;
}
