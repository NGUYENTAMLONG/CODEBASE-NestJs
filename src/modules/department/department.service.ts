import { DEPARTMENT_EXCEPTION_MESSAGE } from './department.constant';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DepartmentRepository } from './department.repository';
import { GetListDepartmentsDto } from './dto';

@Injectable()
export class DepartmentService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  async getById(id: number) {
    const department = await this.departmentRepository.findOne({ where: { id } });
    if (!department) throw new NotFoundException(DEPARTMENT_EXCEPTION_MESSAGE.DEPARTMENT_NOT_FOUND);
    return department;
  }

  getList(dto: GetListDepartmentsDto) {
    return this.departmentRepository.findPaginate(dto);
  }
}
