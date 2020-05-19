import { EntityRepository, Repository } from 'typeorm';
import { ReceiptEntity } from '../entities/receipt.entity';

@EntityRepository(ReceiptEntity)
export class ReceipEntityRepository extends Repository<ReceiptEntity> {}
