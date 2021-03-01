import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'maxxidata_dev',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
