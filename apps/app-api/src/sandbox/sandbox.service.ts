import { Inject, Injectable, Logger } from '@nestjs/common';
import { AppConfigService } from '../config/config.service';

@Injectable()
export class SandboxService {
  private readonly logger = new Logger();
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
    this.logger.log('Hello World!');
    return { appEnviroment: JSON.stringify(message) };
  }
}
