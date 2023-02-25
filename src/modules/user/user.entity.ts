import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { USER_CONST, USER_TYPE } from './constants/user.constant';
import { BaseEntity } from '../../database/base/entity.base';
import { Exclude } from 'class-transformer';
import { DepartmentEntity } from '../department/department.entity';

@Entity({ name: USER_CONST.MODEL_NAME })
export class UserEntity extends BaseEntity {
  @Column({ length: 13, nullable: false, unique: true })
  phone_number: string;

  @Column({ nullable: false })
  @Exclude()
  password: string;

  @Column({ type: 'enum', enum: Object.values(USER_TYPE), nullable: true })
  type: string;

  @Column({ default: false, nullable: false })
  is_adminstrator: boolean;

  @Column({ length: 64, nullable: true })
  sid: string;

  @Column({ nullable: true })
  full_name: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ nullable: true })
  profile_img: string;

  @Column({ default: true, nullable: false })
  status: boolean;

  @Column({ nullable: false })
  department_id: number;

  @ManyToOne(() => DepartmentEntity, (departmentEntity) => departmentEntity.users)
  @JoinColumn({ name: 'department_id' })
  department: DepartmentEntity;
}
