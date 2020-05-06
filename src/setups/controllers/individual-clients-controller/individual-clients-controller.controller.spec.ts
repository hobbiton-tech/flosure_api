import { Test, TestingModule } from '@nestjs/testing';
import { IndividualClientsControllerController } from './individual-clients-controller.controller';

describe('IndividualClientsController Controller', () => {
  let controller: IndividualClientsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndividualClientsControllerController],
    }).compile();

    controller = module.get<IndividualClientsControllerController>(IndividualClientsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
