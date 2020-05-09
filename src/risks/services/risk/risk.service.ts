import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RiskDto } from '../../dtos/risk.dto';
import { Risk } from '../../entities/risk.entity';
import { RiskRepository } from '../../repositories/risk.repository';

@Injectable()
export class RiskService {
  constructor(
    @InjectRepository(Risk)
    private readonly riskRepository: RiskRepository,
  ) {}

  findAll = async () => {
    return this.riskRepository.find({
      relations: ['loads', 'discounts'],
    });
  };

  createRisk = async (riskDto: RiskDto) => {
    return this.riskRepository.save(riskDto);
  };

  findOneRisk = async (id: string) => {
    return this.riskRepository.findOneOrFail(id);
  };

  updateRisk = async (id: string, riskDto: RiskDto) => {
    return this.riskRepository.save({ ...riskDto, id: id });
  };
}
