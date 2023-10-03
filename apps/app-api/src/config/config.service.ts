import { Injectable } from '@nestjs/common';
import { ConfigService, Path, PathValue } from '@nestjs/config';

import { AppConfig } from './configration';

@Injectable()
export class AppConfigService extends ConfigService<AppConfig, true> {
  get<P extends Path<T>, T = AppConfig>(arg: P): PathValue<T, P> {
    return super.get<T, P, PathValue<T, P>>(arg, { infer: true });
  }
}
