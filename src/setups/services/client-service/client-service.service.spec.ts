import { Test, TestingModule } from '@nestjs/testing';
import { ClientServiceService } from './client-service.service';

describe('ClientServiceService', () => {
  let service: ClientServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientServiceService],
    }).compile();

    service = module.get<ClientServiceService>(ClientServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
