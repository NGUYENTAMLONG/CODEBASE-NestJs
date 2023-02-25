import { Module } from '@nestjs/common';
import { DepartmentModule } from '../department/department.module';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [DepartmentModule],
  controllers: [UserController],
  providers: [...userProviders, UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
