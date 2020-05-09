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

@Entity()
export class Risk {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  riskStartDate: Date;

  @Column()
  riskEndDate: Date;

  @Column()
  regNumber: string;

  @Column()
  vehicleMake: string;

  @Column()
  vehicleModel: string;

  @Column()
  yearOfManufacture: Date;

  @Column()
  engineNumber: string;

  @Column()
  chassisNumber: string;

  @Column()
  color: string;

  @Column()
  estimatedValue: number;

  @Column()
  productType: ProductType;

  @Column()
  insuranceType: InsuranceType;

  @Column()
  sumInsured: number;

  @Column()
  premiumRate: number;

  @Column()
  basicPremium: number;

  @Column()
  loadingTotal: number;

  // @Column()
  // discountTotal: number;

  @Column()
  discountSubTotal: number;

  @Column()
  discountRate: number;

  @Column()
  premiumLevy: number;

  @Column()
  netPremium: number;

  @ManyToOne(
    type => Policy,
    x => x.risks,
  )
  policy: Policy;

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
