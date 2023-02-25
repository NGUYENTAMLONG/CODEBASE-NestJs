import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { USER_TYPE } from '../constants/user.constant';

export class CreateUserDto {
  @ApiProperty()
  @IsEnum(Object.values(USER_TYPE))
  type: string;

  @ApiProperty()
  @IsString()
  sid: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  department_id: number;

  @ApiProperty()
  @IsString()
  @IsNumberString()
  @MaxLength(13)
  phone_number: string;

  @ApiProperty()
  @IsString()
  full_name: string;

  @ApiProperty()
  @IsEmail({}, { message: 'email_wrongformat' })
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  profile_img?: string;
}
