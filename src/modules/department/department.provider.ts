import { DataSource } from 'typeorm';
import { DEPARTMENT_CONST } from './department.constant';
import { DepartmentEntity } from './department.entity';

export const DepartmentProvider = [
  {
    provide: DEPARTMENT_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(DepartmentEntity),
    inject: ['DATA_SOURCE'],
  },
];
