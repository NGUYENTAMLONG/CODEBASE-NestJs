import { JWT_CONFIG } from 'src/configs/constants.config';
import { JwtPayload } from './payloads/jwt-payload';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { AUTH_ERROR } from './auth.constant';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';
import { LoginDto } from './dto';
import { IAuthResponse } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async login({ phone_number, password }: LoginDto): Promise<IAuthResponse> {
    let user: UserEntity;
    try {
      user = await this.userService.getUserByPhoneNumber(phone_number);
    } catch (error) {
      throw new BadRequestException(AUTH_ERROR.PHONE_NUMBER_NOT_FOUND);
    }

    const isPasswordRight = await bcrypt.compare(password, user.password);
    if (!isPasswordRight) {
      throw new BadRequestException(AUTH_ERROR.WRONG_PASSWORD);
    }
    if (!user.status) {
      throw new BadRequestException(AUTH_ERROR.ACCOUNT_BLOCKED);
    }

    const tokenPayload: JwtPayload = {
      sub: user.id,
      phone_number: user.phone_number,
      name: user.full_name,
    };

    const accessToken = this.jwtService.sign(tokenPayload);
    const refreshToken = this.jwtService.sign(tokenPayload, {
      secret: JWT_CONFIG.REFRESH_SECRET,
      expiresIn: JWT_CONFIG.REFRESH_EXPIRED_IN,
    });

    return { accessToken, refreshToken };
  }

  async adminAuth({ phone_number, password }: LoginDto): Promise<IAuthResponse> {
    let user: UserEntity;
    try {
      user = await this.userService.getUserByPhoneNumber(phone_number);
    } catch (error) {
      throw new BadRequestException(AUTH_ERROR.PHONE_NUMBER_NOT_FOUND);
    }

    const isPasswordRight = await bcrypt.compare(password, user.password);
    if (!isPasswordRight) {
      throw new BadRequestException(AUTH_ERROR.WRONG_PASSWORD);
    }
    if (!user.status) {
      throw new BadRequestException(AUTH_ERROR.ACCOUNT_BLOCKED);
    }

    const tokenPayload: JwtPayload = {
      sub: user.id,
      phone_number: user.phone_number,
      isAdministrator: user.is_adminstrator,
      name: user.full_name,
    };

    const accessToken = this.jwtService.sign(tokenPayload);
    const refreshToken = this.jwtService.sign(tokenPayload, {
      secret: JWT_CONFIG.REFRESH_SECRET,
      expiresIn: JWT_CONFIG.REFRESH_EXPIRED_IN,
    });

    return { accessToken, refreshToken };
  }
}
