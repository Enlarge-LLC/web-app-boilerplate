import { Module } from '@nestjs/common';

import { SandboxModule } from './sandbox/sandbox.module';

@Module({
  imports: [SandboxModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
