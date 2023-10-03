/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { AppLoggerService } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: false,
  });

  // Setup swagger
  const openAPIPrefix = 'document';
  const config = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(openAPIPrefix, app, document);

  const port = process.env.PORT || 3000;
  const logger = await app.resolve<AppLoggerService>(AppLoggerService);
  app.useLogger(logger);
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
  Logger.log(
    `🚀 OpenAPI document is running on: http://localhost:${port}/${openAPIPrefix}`,
  );
}

bootstrap();
