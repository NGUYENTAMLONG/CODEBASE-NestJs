import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBadRequestResponse, ApiConsumes, ApiExtraModels, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AttachmentService } from './attachment.service';
import { AttachmentEntity } from './attachment.entity';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { QueryParamDto } from './dto/query-param.dto';
import { BadRequestEntity } from 'src/common/constants/app/app.object';
import { swaggerSchemaArr, swaggerSchemaRef } from 'src/common/utils/swagger.util';

@ApiTags('Attachment')
@Controller({
  version: ['1'],
  path: 'attachments',
})
@ApiExtraModels(AttachmentEntity)
export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) {}

  @Get('')
  @ApiOkResponse(swaggerSchemaArr(AttachmentEntity))
  @ApiBadRequestResponse(swaggerSchemaRef(BadRequestEntity))
  async getList(@Query() query: QueryParamDto) {
    return this.attachmentService.getList(query);
  }

  @Post('')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('attachment'))
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse(swaggerSchemaRef(AttachmentEntity))
  @ApiBadRequestResponse(swaggerSchemaRef(BadRequestEntity))
  async uploadAttachment(@Body() body: CreateAttachmentDto, @UploadedFile() file: Express.Multer.File) {
    return this.attachmentService.uploadAttachment(file, body.type);
  }
}
