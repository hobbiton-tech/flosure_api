import { Test, TestingModule } from '@nestjs/testing';
import { CommissionSetupsController } from './commission-setups.controller';

describe('CommissionSetups Controller', () => {
  let controller: CommissionSetupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommissionSetupsController],
    }).compile();

    controller = module.get<CommissionSetupsController>(CommissionSetupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
