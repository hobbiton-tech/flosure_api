import { Test, TestingModule } from '@nestjs/testing';
import { CommissionSetupsService } from './commission-setups.service';

describe('CommissionSetupsService', () => {
  let service: CommissionSetupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommissionSetupsService],
    }).compile();

    service = module.get<CommissionSetupsService>(CommissionSetupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
