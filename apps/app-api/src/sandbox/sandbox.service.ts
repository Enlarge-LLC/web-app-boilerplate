import { Inject, Injectable } from '@nestjs/common';
import { AppConfigService } from '../config/config.service';

@Injectable()
export class SandboxService {
  constructor(@Inject('AppConfigService') private config: AppConfigService) {}

  getData(): { appEnviroment: string } {
    const version = this.config.get('app.version');
    const enviroment = this.config.get('app.enviroment');
    const logging = this.config.get('app.logging');
    const message = {
      version,
      enviroment,
      logging,
    };
    return { appEnviroment: JSON.stringify(message) };
  }
}
