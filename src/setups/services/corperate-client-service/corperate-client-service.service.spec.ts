import { Test, TestingModule } from '@nestjs/testing';
import { CorperateClientService } from './corperate-client-service.service';

describe('CorperateClientServiceService', () => {
  let service: CorperateClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorperateClientService],
    }).compile();

    service = module.get<CorperateClientService>(CorperateClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
