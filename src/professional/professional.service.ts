import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import { CreateProfessional } from './usecases/create-professional';
import { UpdateProfessional } from './usecases/update-professional';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfessionalRepository } from './professional.repository';
import { Professional } from './professional.entity';
import { ProfessionalType } from '../professional-type/professional-type.entity';
import { ProfessionalTypeRepository } from '../professional-type/professional-type.repository';

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectRepository(ProfessionalRepository)
    private professionalRepository: ProfessionalRepository,
    @InjectRepository(ProfessionalTypeRepository)
    private professionalTypeRepository: ProfessionalTypeRepository,
  ) {}

  async all(): Promise<Professional[]> {
    return await this.professionalRepository.find();
  }

  async getOne(id: string): Promise<Professional> {
    const professional = await this.professionalRepository.findOne(id);
    if (!professional) {
      throw new NotFoundException('Profissional não encontrado');
    }
    return professional;
  }

  async create(createProfessional: CreateProfessional) {
    const professionalType = await this.professionalTypeRepository.findOne(
      createProfessional.professionalType,
    );

    if (!professionalType) {
      throw new NotFoundException('ProfissionalType não encontrado');
    }

    const professional = await this.professionalRepository.create({
      ...createProfessional,
      type: professionalType,
    });

    try {
      await this.professionalRepository.save(professional);

      return professional;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  update(id: string, updateProfessional: UpdateProfessional) {
    const professional = this.professionalRepository.findOne(id);

    if (!professional) {
      throw new NotFoundException('Profissional não encontrado');
    }

    try {
      this.professionalRepository.update({ id }, updateProfessional);
      return professional;
    } catch (error) {}
  }
}
