import { ApiProperty } from '@nestjs/swagger';

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
}

export class AuthResponse implements IAuthResponse {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;
}
