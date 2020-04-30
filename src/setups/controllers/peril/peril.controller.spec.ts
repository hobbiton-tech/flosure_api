import { Test, TestingModule } from '@nestjs/testing';
import { PerilController } from './peril.controller';

describe('Peril Controller', () => {
  let controller: PerilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerilController],
    }).compile();

    controller = module.get<PerilController>(PerilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
