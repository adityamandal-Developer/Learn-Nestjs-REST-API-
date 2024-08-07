import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from 'process';
import { CustomLoggerService } from './custom-logger/custom-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //custom logger (comment the above code and use this if want to use custom logger)
  // const app = await NestFactory.create(AppModule, {
  //   bufferLogs: true,
  // });
  // app.useLogger(app.get(CustomLoggerService));

  app.enableCors();
  app.setGlobalPrefix(`${env.API_KEY}`);
  await app.listen(3000);
}
bootstrap();
