import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BaseEntity,
  Column,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { RoleEntity } from '../role/role.entity';

import { PERMISSION_CONST } from './permission.constant';

@Entity({ name: PERMISSION_CONST.MODEL_NAME })
export class PermissionEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('varchar')
  action: string;

  @Column('varchar')
  resource: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar')
  group: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date;

  @ManyToMany(() => RoleEntity, (role) => role.permissions)
  @JoinTable({
    name: 'role_permission',
    joinColumn: { name: 'permission_id' },
    inverseJoinColumn: { name: 'role_id' },
  })
  roles: RoleEntity[];
}
