import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository } from '../../database/base/repository.base';
import { Repository } from 'typeorm';
import { USER_CONST } from './constants/user.constant';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  constructor(
    @Inject(USER_CONST.MODEL_PROVIDER)
    userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }
}
