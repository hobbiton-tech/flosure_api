import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity('product_class')
export class ProductClass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  className: string;

  @Column()
  classCode: number;

  @Column()
  classDescription: string;

  @Column()
  classPolicyNumberPrefix: string;

  @Column()
  classClaimNumberPrefix: string;

  @OneToMany(
    type => Product,
    product => product.class,
  )
  products: Product[];
}
