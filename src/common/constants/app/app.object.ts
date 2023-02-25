import { ApiProperty } from '@nestjs/swagger';

export class BadRequestEntity {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  code: string;

  @ApiProperty()
  message: string;
}
