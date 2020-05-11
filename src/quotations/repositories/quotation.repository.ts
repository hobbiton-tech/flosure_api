import { EntityRepository, Repository, Entity } from 'typeorm';
import { Quotation } from '../entities/quotation.entity';

@EntityRepository(Quotation)
export class QuotationRepository extends Repository<Quotation> {}
