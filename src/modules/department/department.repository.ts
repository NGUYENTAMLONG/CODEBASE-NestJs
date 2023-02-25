import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../database/base/repository.base';

import { DEPARTMENT_CONST } from './department.constant';
import { DepartmentEntity } from './department.entity';

@Injectable()
export class DepartmentRepository extends BaseRepository<DepartmentEntity> {
  constructor(@Inject(DEPARTMENT_CONST.MODEL_PROVIDER) DepartmentRepository: Repository<DepartmentEntity>) {
    super(DepartmentRepository);
  }
}
