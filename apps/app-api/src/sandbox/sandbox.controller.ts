import { Controller, Get } from '@nestjs/common';

import { SandboxService } from './sandbox.service';

@Controller()
export class SandboxController {
  constructor(private readonly service: SandboxService) {}

  @Get()
  getData() {
    return this.service.getData();
  }
}
