import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import middleware1 from './middleware/middleware1';
import middleware2 from './middleware/middleware2';
import { middleware3 } from './middleware/middleware3';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(middleware1); //for all routes
  app.use(middleware2);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();