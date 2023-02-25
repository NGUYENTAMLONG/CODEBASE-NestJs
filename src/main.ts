import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverConfig from './configs/server.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  serverConfig(app);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
