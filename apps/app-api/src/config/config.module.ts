import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppConfigService } from './config.service';
import { generateAppConfig } from './configration';

// グローバルにする
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      load: [generateAppConfig],
    }),
  ],
  providers: [
    {
      provide: 'AppConfigService',
      useClass: AppConfigService,
    },
  ],
  exports: ['AppConfigService'],
})
export class AppConfigModule {}
