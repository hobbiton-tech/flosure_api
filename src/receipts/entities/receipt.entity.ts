import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export abstract class ReceiptEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  receiptNumber?: string;

  @Column({ nullable: true })
  tpinNumber?: number;

  @Column({ nullable: true })
  onBehalfOf: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
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

  @Column({ nullable: true })
  receivedFrom: string;

  @Column({ nullable: true })
  narration: string;

  @Column()
  receiptType: string;

  @Column()
  receiptStatus: ReceiptStatus;

  @Column({ nullable: true })
  remarks?: string;

  @Column({ nullable: true })
  sourceOfBusiness?: string;

  @Column({ nullable: true })
  intermediaryName?: string;
}

export type SourceOfBusinessType =
  | 'Direct'
  | 'Broker'
  | 'Agent'
  | 'Sales Representative';
export type ReceiptStatus = 'Receipted' | 'Cancelled';
