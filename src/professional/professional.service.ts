import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfessional } from './usecases/create-professional';
import { UpdateProfessional } from './usecases/update-professional';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfessionalRepository } from './professional.repository';
import { Professional } from './professional.entity';
import { ProfessionalTypeRepository } from '../professional-type/professional-type.repository';
import { types } from 'util';

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectRepository(ProfessionalRepository)
    private professionalRepository: ProfessionalRepository,
    @InjectRepository(ProfessionalTypeRepository)
    private professionalTypeRepository: ProfessionalTypeRepository,
  ) {}

  async all(): Promise<Professional[]> {
    return await this.professionalRepository.find({
      relations: ['typeOfProfessional'],
    });
  }

  async getOne(id: string): Promise<Professional> {
    const professional = await this.professionalRepository.findOne(id, {
      relations: ['typeOfProfessional'],
    });

    if (!professional) {
      throw new NotFoundException('Profissional não encontrado');
    }

    return professional;
  }

  async create(createProfessional: CreateProfessional) {
    const professionalType = await this.professionalTypeRepository.findOne(
      createProfessional.typeOfProfessional,
    );

    if (!professionalType) {
      throw new NotFoundException('ProfissionalType não encontrado');
    }

    const professional = await this.professionalRepository.create({
      ...createProfessional,
      typeOfProfessional: professionalType,
    });

    try {
      await this.professionalRepository.save(professional);

      return professional;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: string, updateProfessional: UpdateProfessional) {
    const professional = await this.professionalRepository.findOne(id);

    if (!professional) {
      throw new NotFoundException('Profissional não encontrado');
    }

    try {
      const typeOfProfessional = await this.professionalTypeRepository.findOne(
        updateProfessional.typeOfProfessional,
      );

      const { email, name, situation, telephone } = updateProfessional;

      professional.name = name ? name : professional.name;
      professional.email = email ? email : professional.email;
      professional.situation = situation;
      professional.telephone = telephone ? telephone : professional.telephone;
      professional.typeOfProfessional = typeOfProfessional
        ? typeOfProfessional
        : professional.typeOfProfessional;

      await this.professionalRepository.save(professional);

      return professional;
    } catch (error) {}
  }
}
