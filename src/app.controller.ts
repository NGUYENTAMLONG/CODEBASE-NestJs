import { Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { swaggerSchemaExample } from './common/utils/swagger.util';

export const SWAGGER_RESPONSE = {
  HEALTH_CHECK: swaggerSchemaExample({
    example: {
      message: 'OK Test',
      statusCode: 200,
    },
    description: 'API for health check',
  }),
};

export class AppController {
  @ApiOkResponse(SWAGGER_RESPONSE.HEALTH_CHECK)
  @Get('health-check')
  healthCheck() {
    return {
      message: 'OK Test',
      statusCode: 200,
    };
  }
}
