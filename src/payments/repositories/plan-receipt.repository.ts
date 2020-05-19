import { EntityRepository, Repository, Entity } from 'typeorm';
import { PlanReceiptEntity } from '../entities/plan-receipt.entity';

@EntityRepository(PlanReceiptEntity)
export class PlanReceiptEntitRepository extends Repository<PlanReceiptEntity> {}
