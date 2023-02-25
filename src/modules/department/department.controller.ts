import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { GetListDepartmentsDto } from './dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Department')
@ApiBearerAuth()
@Controller({
  version: ['1'],
  path: 'departments',
})
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  getList(@Query() dto: GetListDepartmentsDto) {
    return this.departmentService.getList(dto);
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) departmentId: number) {
    return this.departmentService.getById(departmentId);
  }
}
