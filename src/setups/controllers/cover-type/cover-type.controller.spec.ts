import { Test, TestingModule } from '@nestjs/testing';
import { CoverTypeController } from './cover-type.controller';

describe('CoverType Controller', () => {
  let controller: CoverTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoverTypeController],
    }).compile();

    controller = module.get<CoverTypeController>(CoverTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
