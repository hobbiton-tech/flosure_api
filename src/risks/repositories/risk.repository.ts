import { EntityRepository, Repository } from 'typeorm';
import { Risk } from '../entities/risk.entity';

@EntityRepository(Risk)
export class RiskRepository extends Repository<Risk> {}
