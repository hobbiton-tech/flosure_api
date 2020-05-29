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
import { DebitNote } from 'src/documents/entities/debit-note.entity';
import { CreditNote } from 'src/documents/entities/credit-note.entity';
import { CoverNote } from 'src/documents/entities/cover-note.entity';

@Entity()
export class Policy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  policyNumber: string;

  @Column({ nullable: true })
  product: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  client: string;

  @Column({ nullable: true })
  clientCode: string;

  @Column()
  nameOfInsured: string;

  @Column({ type: 'real' })
  sumInsured: string;

  @Column({ nullable: true })
  branch: string;

  @Column({ nullable: true })
  insuranceCompany: string;

  @Column()
  currency: string;

  @Column({ nullable: true })
  preparedBy: string;

  @Column()
  status: PolicyStatus;

  @Column({ nullable: true })
  timeOfIssue: Date;

  @Column()
  expiryDate: Date;

  @Column()
  dateOfIssue: Date;

  @Column()
  quarter: string;

  @Column()
  user: string;

  @Column({ nullable: true })
  town: string;

  @Column({ nullable: true })
  productType: ProductType;

  @Column()
  netPremium: string;

  @Column({ nullable: true })
  underwritingYear: Date;

  @Column()
  receiptStatus: ReceiptStatus;

  @Column()
  paymentPlan: PaymentPlan;

  @Column()
  sourceOfBusiness: SourceOfBusinessType;

  @Column()
  intermediaryName: string;

  @OneToMany(
    type => Risk,
    risk => risk.policy,
    { cascade: true },
  )
  risks: Risk[];

  @OneToMany(
    type => Endorsement,
    endorsement => endorsement.policy,
    { nullable: true },
  )
  endorsements: Endorsement[];

  @OneToMany(
    type => DebitNote,
    debitNote => debitNote.policy,
    { nullable: true },
  )
  debitNotes: DebitNote[];

  @OneToMany(
    type => CreditNote,
    creditNote => creditNote.policy,
    { nullable: true },
  )
  creditNotes: CreditNote[];

  @OneToMany(
    type => CoverNote,
    coverNote => coverNote.policy,
    { nullable: true },
  )
  coverNotes: CoverNote[];
}

export type PolicyStatus = 'Lapsed' | 'Active' | 'Cancelled' | 'Expired';
export type ProductType = 'Private' | 'Commercial' | 'Bus/Taxi';
export type ReceiptStatus = 'Unreceipted' | 'Receipted';
export type PaymentPlan = 'Created' | 'NotCreated';
export type SourceOfBusinessType =
  | 'Direct'
  | 'Broker'
  | 'Agent'
  | 'Sales Representative';
