import { Module } from '@nestjs/common';

import { AttachmentService } from './attachment.service';
import { AttachmentRepository } from './attachment.repository';
import { UploadModule } from '../../common/external-services/upload/upload.module';
import { AttachmentController } from './attachment.controller';
import { attachmentProviders } from './attachment.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule, UploadModule],
  controllers: [AttachmentController],
  providers: [AttachmentService, AttachmentRepository, ...attachmentProviders],
  exports: [AttachmentService],
})
export class AttachmentModule {}
