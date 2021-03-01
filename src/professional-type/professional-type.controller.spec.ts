import { Test, TestingModule } from '@nestjs/testing';
import { ProfessionalTypeController } from './professional-type.controller';

describe('ProfessionalTypeController', () => {
  let controller: ProfessionalTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfessionalTypeController],
    }).compile();

    controller = module.get<ProfessionalTypeController>(ProfessionalTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
