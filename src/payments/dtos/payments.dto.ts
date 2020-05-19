import { ApiProperty } from '@nestjs/swagger';
import { PolicyPaymentPlanEntity } from '../entities/policy-payment-plan.entity';
import { PlanReceiptEntity } from '../entities/plan-receipt.entity';
import { Installments } from '../entities/installments.entity';

export class PaymentsDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  clientName: string;

  @ApiProperty()
  clientId: string;

  @ApiProperty()
  numberOfPolicies: number;

  @ApiProperty()
  totalPremium: number;

  @ApiProperty()
  status: PaymentPlanStatus;

  @ApiProperty()
  remainingInstallments: number;

  @ApiProperty()
  amountPaid: number;

  @ApiProperty()
  amountOutstanding: number;

  @ApiProperty()
  numberOfInstallments: number;

  @ApiProperty()
  numberOfPaidInstallments: number;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  initialInstallmentAmount: number;

  @ApiProperty()
  policyPaymentPlan: PolicyPaymentPlanEntity[];

  @ApiProperty()
  installments: Installments[];

  @ApiProperty()
  planReceipt: PlanReceiptEntity[];
}

export type ReceiptStatus = 'Receipted' | 'Cancelled';
export type PaymentPlanStatus = 'Fully Paid' | 'Partially Paid' | 'UnPaid';
export type PolicyPlanStatus = 'Fully Paid' | 'Partially Paid' | 'UnPaid';

export type InstallmentStatus = 'Fully Paid' | 'Partially Paid' | 'UnPaid';

export type Currency = 'ZMW' | 'Dollar';
export type InsuranceType = 'ThirdParty' | 'Comprehensive';
export type AllocationStatus =
  | 'Allocated'
  | 'Partially Allocated'
  | 'Unallocated';
