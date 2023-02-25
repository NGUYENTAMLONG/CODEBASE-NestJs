import { DataSource } from 'typeorm';
import { USER_CONST } from './constants/user.constant';
import { UserEntity } from './user.entity';

export const userProviders = [
  {
    provide: USER_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];
