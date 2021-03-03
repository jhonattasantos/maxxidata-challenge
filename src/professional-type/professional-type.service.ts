import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfessionalType } from './usecases/create-professional-type';
import { UpdateProfessionalType } from './usecases/update-professional-type';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfessionalTypeRepository } from './professional-type.repository';
import { ProfessionalType } from './professional-type.entity';

@Injectable()
export class ProfessionalTypeService {
  constructor(
    @InjectRepository(ProfessionalTypeRepository)
    private professionalTypeRepository: ProfessionalTypeRepository,
  ) {}

  async all(): Promise<ProfessionalType[]> {
    return await this.professionalTypeRepository.find();
  }

  async getOne(id: string): Promise<ProfessionalType> {
    return await this.professionalTypeRepository.findOne(id);
  }

  async create(
    createProfessionalType: CreateProfessionalType,
  ): Promise<ProfessionalType> {
    const { description } = createProfessionalType;
    const professionalType = this.professionalTypeRepository.create({
      description,
    });
    try {
      await this.professionalTypeRepository.save(professionalType);
      return professionalType;
    } catch (error) {
      throw new InternalServerErrorException('error ao salvar');
    }
  }

  async update(
    id: string,
    updateProfessionalType: UpdateProfessionalType,
  ): Promise<ProfessionalType> {
    const professionalType = await this.professionalTypeRepository.findOne(id);

    if (!professionalType) {
      throw new NotFoundException('Profissão não encontrado');
    }

    try {
      await this.professionalTypeRepository.update(
        { id },
        { ...updateProfessionalType },
      );
      return await this.professionalTypeRepository.findOne(id);
    } catch (error) {
      throw new InternalServerErrorException('error ao atualizar');
    }
  }
}
