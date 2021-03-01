import { Controller } from '@nestjs/common';
import { ProfessionalService } from './professional.service';

@Controller('professional')
export class ProfessionalController {
  constructor(private professionalService: ProfessionalService) {}
  getAll() {
    return 'all';
  }
  getOne() {
    return 'one';
  }
  create() {
    return 'create';
  }
  update() {
    return 'update';
  }
}
