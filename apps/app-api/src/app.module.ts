import { Module } from '@nestjs/common';

import { SandboxModule } from './sandbox/sandbox.module';
import { AppLoggerModule } from './logger/logger.module';
import { AppLoggerService } from './logger/logger.service';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';

@Module({
  imports: [SandboxModule, AppLoggerModule, ConfigModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
