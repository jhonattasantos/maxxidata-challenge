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
import { ProfessionalService } from './professional.service';
import { CreateProfessional } from './usecases/create-professional';
import { UpdateProfessional } from './usecases/update-professional';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@Controller('professionals')
export class ProfessionalController {
  constructor(private professionalService: ProfessionalService) {}

  @Get()
  getAll() {
    return this.professionalService.all();
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.professionalService.getOne(id);
  }
  @Post()
  create(@Body(ValidationPipe) createProfessional: CreateProfessional) {
    return this.professionalService.create(createProfessional);
  }

  @Put(':id')
  update(
    @Body(ValidationPipe) updateProfessional: UpdateProfessional,
    @Param('id') id,
  ) {
    return this.professionalService.update(id, updateProfessional);
  }
}
