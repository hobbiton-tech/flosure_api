import { Test, TestingModule } from '@nestjs/testing';
import { IndividualClientServiceService } from './individual-client-service.service';

describe('IndividualClientServiceService', () => {
  let service: IndividualClientServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndividualClientServiceService],
    }).compile();

    service = module.get<IndividualClientServiceService>(IndividualClientServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
