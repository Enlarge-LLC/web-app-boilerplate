import { Injectable } from '@nestjs/common';

@Injectable()
export class SandboxService {
  getData(): { message: string } {
    return { message: 'Hello World from API.' };
  }
}
