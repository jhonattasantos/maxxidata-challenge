import { EntityRepository, Repository } from 'typeorm';
import { Professional } from './professional.entity';

@EntityRepository(Professional)
export class ProfessionalRepository extends Repository<Professional> {}
