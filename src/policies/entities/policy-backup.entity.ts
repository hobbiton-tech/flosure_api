import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Endorsement } from '../../endorsements/entities/endorsement.entity';
import { type } from 'os';
import { Risk } from '../../risks/entities/risk.entity';

@Entity()
export class PolicyBackUp {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  policyNumber: string;

  @Column()
  product: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  client: string;

  @Column()
  clientCode: string;

  @Column()
  nameOfInsured: string;

  @Column()
  branch: string;

  @Column()
  insuranceCompany: string;

  @Column()
  currency: string;

  @Column()
  preparedBy: string;

  @Column()
  status: PolicyStatus;

  @Column()
  timeOfIssue: Date;

  @Column()
  expiryDate: Date;

  @Column()
  dateOfIssue: Date;

  @Column()
  quarter: string;

  @Column()
  user: string;

  @Column()
  town: string;

  @Column()
  productType: ProductType;

  @Column()
  netPremium: number;

  @Column()
  underwritingYear: Date;

  @Column()
  receiptStatus: ReceiptStatus;

  @Column()
  paymentPlan: PaymentPlan;

  @OneToMany(
    type => Risk,
    risk => risk.policyBackUp,
    { cascade: true },
  )
  risks: Risk[];

  @OneToOne(
    type => Endorsement,
    endorsement => endorsement.policy,
  )
  @JoinColumn()
  endorsement: Endorsement;
}

export type PolicyStatus = 'Lapsed' | 'Active' | 'Cancelled' | 'Expired';
export type ProductType = 'Private' | 'Commercial' | 'Bus/Taxi';
export type ReceiptStatus = 'Unreceipted' | 'Receipted';
export type PaymentPlan = 'Created' | 'NotCreated';
