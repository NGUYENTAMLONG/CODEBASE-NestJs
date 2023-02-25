import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PermissionModule } from './modules/permission/permission.module';
import { RoleModule } from './modules/role/role.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { DatabaseModule } from './database/database.module';
import { AttachmentModule } from './modules/attachment/attachment.module';
import { UserModule } from './modules/user/user.module';
import { DepartmentModule } from './modules/department/department.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'static'),
      serveRoot: '/public',
    }),
    AuthModule,
    DatabaseModule,
    AttachmentModule,
    UserModule,
    PermissionModule,
    RoleModule,
    DepartmentModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
