import { Module } from '@nestjs/common';
import { ProfessionalController } from './professional.controller';
import { ProfessionalService } from './professional.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessionalRepository } from './professional.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProfessionalRepository])],
  controllers: [ProfessionalController],
  providers: [ProfessionalService],
})
export class ProfessionalModule {}
