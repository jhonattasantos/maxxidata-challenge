import { Test, TestingModule } from '@nestjs/testing';
import { ProfessionalTypeService } from './professional-type.service';

describe('ProfessionalTypeService', () => {
  let service: ProfessionalTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfessionalTypeService],
    }).compile();

    service = module.get<ProfessionalTypeService>(ProfessionalTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
