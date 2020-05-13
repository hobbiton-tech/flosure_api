import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProductClass } from './class.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productName: string;

  @Column()
  productCode: number;

  @Column()
  productDescription: string;

  @Column()
  productPolicyNumberPrefix: string;

  @Column()
  productClaimNumberPrefix: string;

  @ManyToOne(
    type => ProductClass,
    x => x.products,
  )
  class: ProductClass;
}
