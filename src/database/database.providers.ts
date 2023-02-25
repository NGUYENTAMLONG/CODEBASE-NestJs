import typeormConfig from '../configs/typeorm.config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => typeormConfig.initialize(),
  },
];
