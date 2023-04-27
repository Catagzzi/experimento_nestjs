import { NestFactory } from '@nestjs/core';
import { MsModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(MsModule);
  await app.listen(3000);
}
bootstrap();
