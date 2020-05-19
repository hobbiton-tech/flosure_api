import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PaymentsEntity } from './payments.entity';

@Entity()
export class PolicyPaymentPlanEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  policyNumber: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  client: string;

  @Column()
  clientCode: string;

  @Column()
  netPremium: number;

  @Column()
  allocationStatus: AllocationStatus;

  @ManyToOne(
    type => PaymentsEntity,
    x => x.policyPaymentPlan,
  )
  paymentsEntity: PaymentsEntity;
}

export type AllocationStatus =
  | 'Allocated'
  | 'Partially Allocated'
  | 'Unallocated';
