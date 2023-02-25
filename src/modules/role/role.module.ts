import { Module } from '@nestjs/common';

import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleRepository } from './role.repository';
import { RoleProvider } from './role.provider';

@Module({
  imports: [],
  controllers: [RoleController],
  providers: [RoleService, RoleRepository, ...RoleProvider],
  exports: [RoleService],
})
export class RoleModule {}
