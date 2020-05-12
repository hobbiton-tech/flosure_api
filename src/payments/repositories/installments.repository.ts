import { EntityRepository, Repository, Entity, In } from 'typeorm';
import { Installments } from '../entities/installments.entity';

@EntityRepository(Installments)
export class InstallmentEntityRepository extends Repository<Installments> {}
