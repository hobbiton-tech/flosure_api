import { EntityRepository, Repository } from 'typeorm';
import { IndividualClientEntity } from '../entities/individual-clients.entity';

@EntityRepository(IndividualClientEntity)
export class IndividualClientEntityRepository extends Repository<
  IndividualClientEntity
> {}
