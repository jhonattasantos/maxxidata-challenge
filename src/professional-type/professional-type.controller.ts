import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ProfessionalTypeService } from './professional-type.service';
import { CreateProfessionalType } from './usecases/create-professional-type';
import { UpdateProfessionalType } from './usecases/update-professional-type';
import { AuthGuard } from '@nestjs/passport';
import { ProfessionalType } from './professional-type.entity';
@UseGuards(AuthGuard())
@Controller('professional-types')
export class ProfessionalTypeController {
  constructor(private professionalTypeService: ProfessionalTypeService) {}
  @Get()
  async getAll(): Promise<ProfessionalType[]> {
    return this.professionalTypeService.all();
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.professionalTypeService.getOne(id);
  }
  @Post()
  async create(
    @Body(ValidationPipe) createProfessionalType: CreateProfessionalType,
  ): Promise<ProfessionalType> {
    return this.professionalTypeService.create(createProfessionalType);
  }

  @Put(':id')
  update(
    @Body(ValidationPipe) updateProfessionalType: UpdateProfessionalType,
    @Param('id') id,
  ) {
    return this.professionalTypeService.update(id, updateProfessionalType);
  }
}
