import { Test, TestingModule } from '@nestjs/testing';

import { SandboxController } from './sandbox.controller';
import { SandboxService } from './sandbox.service';

describe('SandboxController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [SandboxController],
      providers: [SandboxService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<SandboxController>(SandboxController);
      expect(appController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
