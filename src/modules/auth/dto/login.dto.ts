import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: '0987654321',
    description: 'Account phone number',
  })
  @IsNumberString()
  @MaxLength(13)
  phone_number: string;

  @ApiProperty({
    example: 'tamchuc123',
    description: 'Account password',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
