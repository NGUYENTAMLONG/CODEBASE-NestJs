import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from '../payloads/jwt-payload';
import { RedisService } from 'src/common/external-services/redis/redis.service';
import { JWT_CONFIG } from 'src/configs/constants.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly redisService: RedisService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_CONFIG.SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<JwtPayload> {
    const userBlackList = JSON.parse(await this.redisService.getValueByKey(`user:${payload.sub}`)) as any;

    if (userBlackList && userBlackList.createdAt > payload.iat) {
      throw new UnauthorizedException();
    }
    return { ...payload };
  }
}
