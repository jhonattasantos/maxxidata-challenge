import { Module } from '@nestjs/common';
import { ProfessionalController } from './professional.controller';
import { ProfessionalService } from './professional.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessionalRepository } from './professional.repository';
import { PassportModule } from '@nestjs/passport';
import { ProfessionalTypeRepository } from '../professional-type/professional-type.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProfessionalRepository,
      ProfessionalTypeRepository,
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [ProfessionalController],
  providers: [ProfessionalService],
})
export class ProfessionalModule {}
