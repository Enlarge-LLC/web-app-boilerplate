import { Controller, Get } from '@nestjs/common';

import { SandboxService } from './sandbox.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('/')
export class SandboxController {
  constructor(private readonly service: SandboxService) {}

  @Get()
  getData() {
    return this.service.getData();
  }
}
