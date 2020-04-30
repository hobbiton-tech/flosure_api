import { Test, TestingModule } from '@nestjs/testing';
import { CoverTypeService } from './cover-type.service';

describe('CoverTypeService', () => {
  let service: CoverTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoverTypeService],
    }).compile();

    service = module.get<CoverTypeService>(CoverTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
