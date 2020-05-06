import { Test, TestingModule } from '@nestjs/testing';
import { CorperateClientsControllerController } from './corperate-clients-controller.controller';

describe('CorperateClientsController Controller', () => {
  let controller: CorperateClientsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorperateClientsControllerController],
    }).compile();

    controller = module.get<CorperateClientsControllerController>(CorperateClientsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
