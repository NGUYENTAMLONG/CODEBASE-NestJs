import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from 'class-validator';

export class QueryParamDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pageSize: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  sortBy: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @IsEnum(['DESC', 'ASC'])
  sortOrder: 'DESC' | 'ASC';

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  username: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  department: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  phone_number: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  full_name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  email: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  status: string;
}

export class ParamIdDto {
  @IsNotEmpty()
  @IsNumberString()
  id: number;
}
