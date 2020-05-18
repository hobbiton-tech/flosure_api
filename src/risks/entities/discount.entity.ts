import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Risk } from '../entities/risk.entity';

@Entity()
export class Discount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  discountType: DiscountType;

  @Column({ type: 'real' })
  amount: string;

  @ManyToOne(
    type => Risk,
    risk => risk.loads,
  )
  risk: Risk;
}

export type DiscountType =
  | 'No Claims Discount'
  | 'Loyalty Discount'
  | 'Valued Client Discount'
  | 'Low Term Agreement Discount';
