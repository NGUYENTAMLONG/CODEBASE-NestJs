import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository } from '../../database/base/repository.base';
import { Repository } from 'typeorm';
import { ATTACHMENT_CONST } from './constants/attachment.constant';
import { AttachmentEntity } from './attachment.entity';

@Injectable()
export class AttachmentRepository extends BaseRepository<AttachmentEntity> {
  constructor(
    @Inject(ATTACHMENT_CONST.MODEL_PROVIDER)
    attachmentEntity: Repository<AttachmentEntity>,
  ) {
    super(attachmentEntity);
  }
}
