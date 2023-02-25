import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { DepartmentEntity } from '../department.entity';
import { DATA_DEPARTMENT } from './department.data';

export default class CreateDepartMentSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const departmentFound = await dataSource
      .getRepository(DepartmentEntity)
      .createQueryBuilder()
      .select('*')
      .getRawOne();

    if (!departmentFound) {
      await dataSource.createQueryBuilder().insert().into(DepartmentEntity).values(DATA_DEPARTMENT).execute();
    }
  }
}
