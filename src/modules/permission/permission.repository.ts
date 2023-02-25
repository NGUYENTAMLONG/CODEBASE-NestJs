import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../database/base/repository.base';

import { PERMISSION_CONST } from './permission.constant';
import { PermissionEntity } from './permission.entity';

@Injectable()
export class PermissionRepository extends BaseRepository<PermissionEntity> {
  constructor(@Inject(PERMISSION_CONST.MODEL_PROVIDER) PermissionRepository: Repository<PermissionEntity>) {
    super(PermissionRepository);
  }
}
