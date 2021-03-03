import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { typeOrmConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProfessionalModule } from './professional/professional.module';
import { ProfessionalTypeModule } from './professional-type/professional-type.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, AuthModule, ProfessionalModule, ProfessionalTypeModule, DashboardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
