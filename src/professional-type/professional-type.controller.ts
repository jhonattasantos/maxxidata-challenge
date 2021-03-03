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
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiResponse({ status: 401, description: 'Unauthorized' })
@ApiTags('Professional Types')
@UseGuards(AuthGuard())
@Controller('professional-types')
export class ProfessionalTypeController {
  constructor(private professionalTypeService: ProfessionalTypeService) {}

  @ApiResponse({ status: 200, description: 'ok' })
  @Get()
  async getAll(): Promise<ProfessionalType[]> {
    return this.professionalTypeService.all();
  }

  @ApiResponse({ status: 200, description: 'ok' })
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.professionalTypeService.getOne(id);
  }

  @ApiResponse({ status: 201, description: 'created' })
  @Post()
  async create(
    @Body(ValidationPipe) createProfessionalType: CreateProfessionalType,
  ): Promise<ProfessionalType> {
    return this.professionalTypeService.create(createProfessionalType);
  }

  @ApiResponse({ status: 200, description: 'ok' })
  @Put(':id')
  update(
    @Body(ValidationPipe) updateProfessionalType: UpdateProfessionalType,
    @Param('id') id,
  ) {
    return this.professionalTypeService.update(id, updateProfessionalType);
  }
}
