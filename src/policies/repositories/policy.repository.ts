import { EntityRepository, Repository, Entity } from 'typeorm';
import { Policy } from '../entities/policy.entity';
import { PolicyBackUp } from '../entities/policy-backup.entity';

@EntityRepository(Policy)
export class PolicyRepository extends Repository<Policy> {}

@EntityRepository(PolicyBackUp)
export class PolicyBackUpRepository extends Repository<PolicyBackUp> {}
