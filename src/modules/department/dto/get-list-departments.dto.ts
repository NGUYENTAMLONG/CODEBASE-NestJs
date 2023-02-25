import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ISearchPaginationParams } from '../../../database/interfaces/pagination.interface';
import { ApiProperty } from '@nestjs/swagger';

enum DepartmentsSortBy {
  name = 'name',
}

export class GetListDepartmentsDto implements ISearchPaginationParams {
  @IsOptional()
  page?: number;

  @IsOptional()
  pageSize?: number;

  @ApiProperty({ enum: DepartmentsSortBy })
  @IsEnum(DepartmentsSortBy)
  @IsOptional()
  sortBy?: DepartmentsSortBy;

  @ApiProperty({ enum: ['asc', 'desc'] })
  @IsOptional()
  @IsEnum(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc';

  @IsString()
  @IsOptional()
  search?: string;
}
