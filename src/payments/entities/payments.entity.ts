import { Entity, PrimaryGeneratedColumn, Column, OneToMany, In } from 'typeorm';
import { PlanReceiptEntity } from './plan-receipt.entity';
import { Installments } from './installments.entity';
import { PolicyPaymentPlanEntity } from './policy-payment-plan.entity';

@Entity()
export class PaymentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  clientName: string;

  @Column()
  clientId: string;

  @Column()
  numberOfPolicies: number;

  @Column()
  totalPremium: number;

  @Column()
  status: PaymentPlanStatus;

  @Column()
  remainingInstallments: number;

  @Column()
  amountPaid: number;

  @Column()
  amountOutstanding: number;

  @Column()
  numberOfInstallments: number;

  @Column()
  numberOfPaidInstallments: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  initialInstallmentAmount: number;

  @OneToMany(
    type => PolicyPaymentPlanEntity,
    policyPayment => policyPayment.paymentsEntity,
    { cascade: true },
  )
  policyPaymentPlan: PolicyPaymentPlanEntity[];

  @OneToMany(
    type => Installments,
    installments => installments.paymentsEntity,
    { cascade: true },
  )
  installments: Installments[];

  @OneToMany(
    type => PlanReceiptEntity,
    planReceiptEntity => planReceiptEntity.paymentsEntity,
    { cascade: true },
  )
  planReceipt: PlanReceiptEntity[];
}

export type PaymentPlanStatus = 'Fully Paid' | 'Partially Paid' | 'UnPaid';
