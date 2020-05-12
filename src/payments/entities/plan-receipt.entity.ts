import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PaymentsEntity } from './payments.entity';

@Entity()
export class PlanReceiptEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  receiptNumber?: string;

  @Column()
  onBehalfOf: string;

  @Column()
  sumInDigits: number;

  @Column()
  allocationStatus: AllocationStatus;

  @Column()
  policyNumber: string;

  @ManyToOne(
    type => PaymentsEntity,
    x => x.planReceipt,
  )
  paymentsEntity: PaymentsEntity;
}

export type AllocationStatus =
  | 'Allocated'
  | 'Partially Allocated'
  | 'Unallocated';
