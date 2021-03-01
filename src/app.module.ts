import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { typeOrmConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProfessionalModule } from './professional/professional.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, AuthModule, ProfessionalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
