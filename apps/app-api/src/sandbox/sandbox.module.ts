import { Module } from '@nestjs/common';
import { SandboxController } from './sandbox.controller';
import { SandboxService } from './sandbox.service';
import { AppConfigService } from '../config/config.service';
import { AppConfigModule } from '../config/config.module';

@Module({
  imports: [AppConfigModule],
  providers: [SandboxService],
  controllers: [SandboxController],
})
export class SandboxModule {}
