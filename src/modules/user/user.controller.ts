import { Body, Controller, Get, Post, Param, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiExtraModels, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestEntity } from 'src/common/constants/app/app.object';
import { ObjectUtil } from 'src/common/utils/object.util';
import { swaggerSchemaRef } from 'src/common/utils/swagger.util';
import { CreateUserDto } from './dto/create-user.dto';
import { ParamIdDto } from './dto/query-param.dto';
import { UserEntity } from './user.entity';
import { UserDetailResponseSchema } from './user.interface';
import { UserService } from './user.service';
@ApiTags('User')
@ApiBearerAuth()
@Controller({
  version: ['1'],
  path: 'users',
})
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('')
  @ApiBadRequestResponse()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse(swaggerSchemaRef(UserDetailResponseSchema))
  @ApiBadRequestResponse(swaggerSchemaRef(BadRequestEntity))
  public createUser(@Body() createUserDto: CreateUserDto) {
    const data = ObjectUtil.pick(createUserDto, [
      'sid',
      'department_id',
      'phone_number',
      'full_name',
      'email',
      'profile_img',
    ]);

    return this.userService.createUser(data);
  }

  @Get(':id')
  @ApiExtraModels(UserDetailResponseSchema)
  @ApiOkResponse(swaggerSchemaRef(UserDetailResponseSchema))
  @ApiBadRequestResponse(swaggerSchemaRef(BadRequestEntity))
  getUser(@Param() param: ParamIdDto): Promise<UserEntity> {
    return this.userService.getDetails(param.id);
  }
}
