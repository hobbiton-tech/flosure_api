import { EntityRepository, Repository, Entity } from 'typeorm';
import { CorperateClientEntity } from '../entities/corperate-clients.entity';

@EntityRepository(CorperateClientEntity)
export class CorperateClientEntityRepository extends Repository<
  CorperateClientEntity
> {}
