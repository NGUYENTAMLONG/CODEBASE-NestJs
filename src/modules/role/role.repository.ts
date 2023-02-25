import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../database/base/repository.base';

import { ROLE_CONST } from './role.constant';
import { RoleEntity } from './role.entity';

@Injectable()
export class RoleRepository extends BaseRepository<RoleEntity> {
  constructor(@Inject(ROLE_CONST.MODEL_PROVIDER) RoleRepository: Repository<RoleEntity>) {
    super(RoleRepository);
  }
}
