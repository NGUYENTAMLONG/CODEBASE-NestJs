import { Module } from '@nestjs/common';

import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { PermissionRepository } from './permission.repository';
import { PermissionProvider } from './permission.provider';

@Module({
  imports: [],
  controllers: [PermissionController],
  providers: [PermissionService, PermissionRepository, ...PermissionProvider],
  exports: [PermissionService],
})
export class PermissionModule {}
