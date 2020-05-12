import { EntityRepository, Repository, Entity } from 'typeorm';
import { PaymentsEntity } from '../entities/payments.entity';

@EntityRepository(PaymentsEntity)
export class PaymentsRepository extends Repository<PaymentsEntity> {}
