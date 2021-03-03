import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfessionalRepository } from '../professional/professional.repository';
import { ProfessionalTypeRepository } from '../professional-type/professional-type.repository';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(ProfessionalRepository)
    private professionalRepository: ProfessionalRepository,
    @InjectRepository(ProfessionalTypeRepository)
    private professionalTypeRepository: ProfessionalTypeRepository,
  ) {}

  async professionalCount() {
    return await this.professionalRepository.count();
  }

  async tyepOfProfessionalCount() {
    return await this.professionalTypeRepository.count();
  }

  async lastRegisteredProfessional() {
    const lastProfessional = await this.professionalRepository.find({
      order: {
        updatedAt: 'DESC',
      },
      take: 1,
    });
    return lastProfessional[0];
  }

  async lastRegisteredTyepOfProfessional() {
    const lastTyepOfProfessional = await this.professionalTypeRepository.find({
      order: {
        updatedAt: 'DESC',
      },
      take: 1,
    });
    return lastTyepOfProfessional[0];
  }
}
