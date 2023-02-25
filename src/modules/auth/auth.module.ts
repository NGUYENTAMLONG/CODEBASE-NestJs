import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RedisModule } from 'src/common/external-services/redis/redis.module';
import { JWT_CONFIG, REDIS_CONFIG } from 'src/configs/constants.config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt.guard';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    PassportModule,
    RedisModule.forRoot({
      redisUri: REDIS_CONFIG.REDIS_URI,
    }),
    JwtModule.register({
      secret: JWT_CONFIG.SECRET,
      signOptions: {
        expiresIn: JWT_CONFIG.EXPIRED_IN,
      },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [],
})
export class AuthModule {}
