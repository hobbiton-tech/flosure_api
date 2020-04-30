import { Test, TestingModule } from '@nestjs/testing';
import { PerilService } from './peril.service';

describe('PerilService', () => {
  let service: PerilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerilService],
    }).compile();

    service = module.get<PerilService>(PerilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
