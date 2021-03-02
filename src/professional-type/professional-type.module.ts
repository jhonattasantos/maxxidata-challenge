import { Module } from '@nestjs/common';
import { ProfessionalTypeController } from './professional-type.controller';
import { ProfessionalTypeService } from './professional-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessionalTypeRepository } from './professional-type.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProfessionalTypeRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [ProfessionalTypeController],
  providers: [ProfessionalTypeService],
})
export class ProfessionalTypeModule {}
