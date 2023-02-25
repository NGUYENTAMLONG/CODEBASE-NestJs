import {
  Column,
  Entity,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ATTACHMENT_CONST, ATTACHMENT_TYPE } from './constants/attachment.constant';

@Entity({ name: ATTACHMENT_CONST.MODEL_NAME })
export class AttachmentEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ length: 255, default: null })
  name: string;

  @Column({ length: 255, default: null })
  key: string;

  @Column({ length: 255, default: ATTACHMENT_TYPE.OTHER })
  type: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date;
}
