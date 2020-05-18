import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Policy } from '../../policies/entities/policy.entity';
import { Load } from '../entities/load.entity';
import { Discount } from '../entities/discount.entity';
import { PolicyBackUp } from 'src/policies/entities/policy-backup.entity';
import { Quotation } from 'src/quotations/entities/quotation.entity';

@Entity()
export class Risk {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  riskStartDate: Date;

  @Column()
  riskEndDate: Date;

  @Column()
  riskQuarter: string;

  @Column()
  regNumber: string;

  @Column()
  vehicleMake: string;

  @Column()
  vehicleModel: string;

  @Column({ nullable: true })
  yearOfManufacture: Date;

  @Column({ nullable: true })
  engineNumber: string;

  @Column()
  chassisNumber: string;

  @Column()
  color: string;

  @Column({ nullable: true, type: 'real' })
  estimatedValue: string;

  @Column()
  productType: ProductType;

  @Column()
  insuranceType: InsuranceType;

  @Column({ nullable: true, type: 'real' })
  sumInsured: string;

  @Column({ nullable: true, type: 'real' })
  premiumRate: string;

  @Column({ type: 'real' })
  basicPremium: string;

  @Column({ type: 'real' })
  loadingTotal: string;

  @Column({ type: 'real' })
  discountTotal: string;

  @Column({ nullable: true, type: 'real' })
  discountSubTotal: string;

  @Column({ nullable: true, type: 'real' })
  discountRate: string;

  @Column({ type: 'real' })
  premiumLevy: string;

  @Column({ type: 'real' })
  netPremium: string;

  @ManyToOne(
    type => Policy,
    x => x.risks,
  )
  policy: Policy;

  @ManyToOne(
    type => Quotation,
    x => x.risks,
  )
  quotation: Quotation;

  @ManyToOne(
    type => PolicyBackUp,
    x => x.risks,
  )
  policyBackUp: PolicyBackUp;

  @OneToMany(
    type => Load,
    load => load.risk,
    { cascade: true },
  )
  loads: Load[];

  @OneToMany(
    type => Discount,
    discount => discount.risk,
    { cascade: true },
  )
  discounts: Discount[];
}

export type ProductType = 'Private' | 'Commercial' | 'Bus/Taxi';
export type InsuranceType = 'ThirdParty' | 'Comprehensive';
