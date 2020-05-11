import { EntityRepository, Repository } from 'typeorm';
import { AgentsEntity } from '../entities/agents.entity';
import { BrokerEntity } from '../entities/broker.entity';
import { SalesRepresentativeEntity } from '../entities/sales-representative.entity';

@EntityRepository(AgentsEntity)
export class AgentsEntityRepository extends Repository<AgentsEntity> {}

@EntityRepository(BrokerEntity)
export class BrokerEntityRepository extends Repository<BrokerEntity> {}

@EntityRepository(SalesRepresentativeEntity)
export class SalesRepresentativeEntityRepository extends Repository<
  SalesRepresentativeEntity
> {}
