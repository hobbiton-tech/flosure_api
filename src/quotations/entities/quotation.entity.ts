import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Risk } from 'src/risks/entities/risk.entity';

@Entity()
export class Quotation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user: string;

  @Column()
  client: string;

  @Column()
  quoteNumber: string;

  @Column()
  dateCreated: Date;

  @Column()
  clientCode: string;

  @Column()
  messageCode: string;

  @Column()
  coverCode: string;

  @Column()
  underwritingYear: Date;

  @Column()
  branch: string;

  @Column()
  currency: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  status: QuoteStatus;

  @Column()
  basicPremiumSubTotal: number;

  @Column()
  receiptStatus: ReceiptStatus;

  @Column()
  sourceOfBusiness: SourceOfBusinessType;

  @Column()
  intermediaryName: string;

  @Column()
  quarter: string;

  @OneToMany(
    type => Risk,
    risk => risk.policy,
    { cascade: true },
  )
  risks: Risk[];
}

export type SourceOfBusinessType =
  | 'Direct'
  | 'Broker'
  | 'Agent'
  | 'Sales Representative';
export type ReceiptStatus = 'Unreceipted' | 'Receipted';
export type ProductType = 'Private' | 'Commercial' | 'Bus/Taxi';
export type QuoteStatus = 'Draft' | 'Approved';
