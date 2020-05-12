import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export abstract class ReceiptEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  receiptNumber?: string;

  @Column({ nullable: true })
  tpinNumber?: number;

  @Column()
  onBehalfOf: string;

  @Column()
  address?: string;

  @Column()
  sumInWords?: string;

  @Column()
  dateRecieved?: Date;

  @Column()
  paymentMethod: string;

  @Column()
  policyNumber?: string;

  @Column()
  todayDate: Date;

  @Column()
  sumInDigits: number;

  @Column()
  capturedBy: string;

  @Column()
  receivedFrom: string;

  @Column()
  narration: string;

  @Column()
  receiptType: string;

  @Column()
  receiptStatus: ReceiptStatus;

  @Column()
  remarks?: string;

  @Column()
  sourceOfBusiness?: string;

  @Column()
  intermediaryName?: string;
}

export type SourceOfBusinessType =
  | 'Direct'
  | 'Broker'
  | 'Agent'
  | 'Sales Representative';
export type ReceiptStatus = 'Receipted' | 'Cancelled';
