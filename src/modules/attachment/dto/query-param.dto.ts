import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsNotEmpty, IsEnum, IsNumber } from 'class-validator';

enum Attachment_Type {
  JPG = 'jpg',
  JPEG = 'jpeg',
  PNG = 'png',
  HEIC = 'heic',
  WEBP = 'webp',
  GIF = 'gif',
  OTHER = 'other',
}

export class QueryParamDto {
  @ApiPropertyOptional()
  @IsOptional()
  page: number;

  @ApiPropertyOptional()
  @IsOptional()
  pageSize: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sortBy: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @IsEnum(['asc', 'desc'])
  sortOrder: 'asc' | 'desc';

  @ApiPropertyOptional()
  @IsOptional()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  key: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @IsEnum(Type)
  type: Attachment_Type;
}

export class ParamIdDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  id: number;
}
