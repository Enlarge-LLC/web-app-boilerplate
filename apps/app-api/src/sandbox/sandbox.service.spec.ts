import { Test } from '@nestjs/testing';

import { SandboxService } from './sandbox.service';

describe('SandboxService', () => {
  let service: SandboxService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [SandboxService],
    }).compile();

    service = app.get<SandboxService>(SandboxService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
