import { Injectable } from '@nestjs/common';

import { UploadS3Service } from '../../common/external-services/upload/upload-minio.service';
import { IAttachment } from './interface/attachment.interface';
import { AttachmentRepository } from './attachment.repository';
import { QueryParamDto } from './dto/query-param.dto';

@Injectable()
export class AttachmentService {
  constructor(
    private readonly attachmentRepository: AttachmentRepository,
    private readonly uploadS3Service: UploadS3Service,
  ) {}

  async uploadAttachment(file: Express.Multer.File, type: string) {
    const fileUploaded = await this.uploadS3Service.uploadPublicFile(file);
    const attachmentData: IAttachment = {
      name: file.originalname,
      key: fileUploaded.key,
      type: type,
    };

    const attachment = this.attachmentRepository.create(attachmentData);
    return this.attachmentRepository.save(attachment);
  }

  async getList(query: QueryParamDto) {
    const condition = {};
    if (query.key) {
      condition['key'] = query.key;
    }
    if (query.name) {
      condition['original_name'] = query.name;
    }
    if (query.type) {
      condition['type'] = query.type;
    }
    return this.attachmentRepository.findPaginate(query, { where: condition });
  }
}
