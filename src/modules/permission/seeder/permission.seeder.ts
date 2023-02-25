import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { PermissionEntity } from '../permission.entity';
import { DATA_PERMISSION } from './permission.data';

export default class CreatePermissionSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await dataSource.createQueryBuilder().insert().into(PermissionEntity).values(DATA_PERMISSION).execute();
  }
}
