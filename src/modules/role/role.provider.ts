import { DataSource } from 'typeorm';
import { ROLE_CONST } from './role.constant';
import { RoleEntity } from './role.entity';

export const RoleProvider = [
  {
    provide: ROLE_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(RoleEntity),
    inject: ['DATA_SOURCE'],
  },
];
