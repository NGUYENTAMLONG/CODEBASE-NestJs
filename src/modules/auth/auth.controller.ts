import { PublicRoute } from './../../common/decorators/public-route.decorator';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiExtraModels, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import { swaggerSchemaObject, swaggerSchemaRef } from 'src/common/utils/swagger.util';
import { BadRequestEntity } from 'src/common/constants/app/app.object';
import { AuthResponse } from './auth.interface';
@ApiTags('Auth')
@Controller({
  version: ['1'],
  path: '',
})
@ApiExtraModels(AuthResponse)
export class AuthController {
  constructor(private authService: AuthService) {}

  @PublicRoute()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiBadRequestResponse(swaggerSchemaRef(BadRequestEntity))
  @ApiOkResponse(swaggerSchemaObject(AuthResponse))
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @PublicRoute()
  @Post('admin/auth')
  @HttpCode(HttpStatus.OK)
  @ApiBadRequestResponse(swaggerSchemaRef(BadRequestEntity))
  @ApiOkResponse(swaggerSchemaObject(AuthResponse))
  loginAdmin(@Body() body: LoginDto) {
    return this.authService.adminAuth(body);
  }
}
