import { EntityRepository, Repository } from 'typeorm';
import { CorporateClientEntity } from '../entities/corporate-clients.entity';

@EntityRepository(CorporateClientEntity)
export class CorporateClientEntityRepository extends Repository<
  CorporateClientEntity
> {}
