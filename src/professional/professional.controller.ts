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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Professional } from './professional.entity';

@ApiResponse({ status: 401, description: 'Unauthorized' })
@ApiTags('Professionals')
@UseGuards(AuthGuard())
@Controller('professionals')
export class ProfessionalController {
  constructor(private professionalService: ProfessionalService) {}

  @ApiResponse({ status: 200, description: 'ok', type: [Professional] })
  @Get()
  getAll() {
    return this.professionalService.all();
  }

  @ApiResponse({ status: 200, description: 'ok' })
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.professionalService.getOne(id);
  }

  @ApiResponse({ status: 201, description: 'created', type: Professional })
  @Post()
  create(@Body(ValidationPipe) createProfessional: CreateProfessional) {
    return this.professionalService.create(createProfessional);
  }

  @ApiResponse({ status: 200, description: 'ok' })
  @Put(':id')
  update(
    @Body(ValidationPipe) updateProfessional: UpdateProfessional,
    @Param('id') id,
  ) {
    return this.professionalService.update(id, updateProfessional);
  }
}
