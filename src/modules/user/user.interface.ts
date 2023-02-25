import { OmitType } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

export class UserDetailResponseSchema extends OmitType(UserEntity, ['password'] as const) {}
