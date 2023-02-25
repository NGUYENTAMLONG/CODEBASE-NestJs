import { DataSource } from 'typeorm';
import { AttachmentEntity } from './attachment.entity';
import { ATTACHMENT_CONST } from './constants/attachment.constant';

export const attachmentProviders = [
  {
    provide: ATTACHMENT_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) => connection.getRepository(AttachmentEntity),
    inject: ['DATA_SOURCE'],
  },
];
