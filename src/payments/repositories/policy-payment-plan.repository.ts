import { EntityRepository, Repository, Entity } from 'typeorm';
import { PolicyPaymentPlanEntity } from '../entities/policy-payment-plan.entity';

@EntityRepository(PolicyPaymentPlanEntity)
export class PolicyPaymentEntityRepository extends Repository<
  PolicyPaymentPlanEntity
> {}
