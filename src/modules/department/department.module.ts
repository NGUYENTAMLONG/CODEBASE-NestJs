import { Module } from '@nestjs/common';

import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentRepository } from './department.repository';
import { DepartmentProvider } from './department.provider';

@Module({
  imports: [],
  controllers: [DepartmentController],
  providers: [DepartmentService, DepartmentRepository, ...DepartmentProvider],
  exports: [DepartmentService],
})
export class DepartmentModule {}
