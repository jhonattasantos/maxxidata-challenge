import { Controller, Get, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiResponse({ status: 401, description: 'Unauthorized' })
@ApiTags('Dashboard')
@UseGuards(AuthGuard())
@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @ApiResponse({
    status: 200,
    description: 'dash',
  })
  @Get()
  async index() {
    return {
      professionalCount: await this.dashboardService.professionalCount(),
      tyepOfProfessionalCount: await this.dashboardService.tyepOfProfessionalCount(),
      lastRegisteredProfessional: await this.dashboardService.lastRegisteredProfessional(),
      lastRegisteredTyepOfProfessional: await this.dashboardService.lastRegisteredTyepOfProfessional(),
    };
  }
}
