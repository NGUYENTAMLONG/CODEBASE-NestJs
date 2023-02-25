import { CreateUserDto } from './dto/create-user.dto';
import { Injectable, NotFoundException, BadRequestException, OnModuleInit } from '@nestjs/common';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { JWT_CONFIG, METADATA_CONFIG } from '../../configs/constants.config';
import { ERROR_USER } from './constants/user.constant';
import { DepartmentService } from '../department/department.service';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(private userRepository: UserRepository, private departmentService: DepartmentService) {}

  async onModuleInit() {
    const userListFound = await this.userRepository.findAll({
      take: 1,
    });
    if (!userListFound.length) {
      const userNew = this.userRepository.create({
        phone_number: METADATA_CONFIG.DEFAULT_ADMIN_PHONE,
        password: await bcrypt.hash(METADATA_CONFIG.DEFAULT_PASSWORD, JWT_CONFIG.SALT_ROUNDS),
        full_name: 'administrator',
        is_adminstrator: true,
        type: 'admin',
        department_id: 1,
      });
      userNew.save();
    }
  }
  public async createUser(data: Partial<CreateUserDto>) {
    const department = await this.departmentService.getById(data.department_id);

    const user = await this.userRepository.findOne({ where: { phone_number: data.phone_number } });
    if (user) {
      throw new BadRequestException(ERROR_USER.USER_EXISTED);
    }

    const newUser = this.userRepository.create({
      ...data,
      password: await bcrypt.hash(METADATA_CONFIG.DEFAULT_PASSWORD, JWT_CONFIG.SALT_ROUNDS),
      department,
    });

    await this.userRepository.save(newUser);

    return newUser;
  }

  public async getDetails(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException(ERROR_USER.USER_NOT_FOUND);
    }
    return user;
  }

  async getUserByPhoneNumber(phone_number: string) {
    const user = await this.userRepository.findOne({ where: { phone_number } });
    if (!user) {
      throw new NotFoundException(ERROR_USER.USER_NOT_FOUND);
    }
    return user;
  }
}
