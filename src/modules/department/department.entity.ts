import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BaseEntity,
  Column,
  OneToMany,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

import { DEPARTMENT_CONST } from './department.constant';

@Entity({ name: DEPARTMENT_CONST.MODEL_NAME })
export class DepartmentEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 511 })
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date;

  @OneToMany(() => UserEntity, (userEntity) => userEntity.department)
  users: UserEntity[];
}
