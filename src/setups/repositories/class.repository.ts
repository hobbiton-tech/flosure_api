import { EntityRepository, Repository } from 'typeorm';
import { ProductClass } from '../entities/class.entity';

@EntityRepository(ProductClass)
export class ClassRepository extends Repository<ProductClass> {}
