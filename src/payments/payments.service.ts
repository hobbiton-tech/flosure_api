import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PaymentsEntity } from './entities/payments.entity';
import { PaymentsRepository } from './repositories/payments.repository';
// import { PlanReceiptEntitRepository } from './repositories/plan-receipt.repository';
// import { ReceipEntityRepository } from 'src/receipts/repositories/receipt.repository';
// import { PolicyPaymentEntityRepository } from './repositories/policy-payment-plan.repository';
import { PaymentsDto } from './dtos/payments.dto';
import { Installments } from './entities/installments.entity';
import { PlanReceiptEntity } from './entities/plan-receipt.entity';
import { PolicyPaymentPlanEntity } from './entities/policy-payment-plan.entity';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(PaymentsRepository)
    private readonly paymentRepository: PaymentsRepository, // private readonly planreceiptEntityRepository: PlanReceiptEntitRepository,
  ) // private readonly receipEntityRepository: ReceipEntityRepository,
  // private readonly policyPaymentEntityRepository: PolicyPaymentEntityRepository,
  {}

  async findAllPayments(): Promise<PaymentsEntity[]> {
    return this.paymentRepository.find({
      relations: ['installments', 'plan-receipt', 'policy-payments'],
    });
  }

  async createPayment(paymentsDto: PaymentsDto): Promise<void> {
    const paymentPlan = new PaymentsEntity();

    const installments = new Array<Installments>();
    const planReceiptEntitys = new Array<PlanReceiptEntity>();
    const policyPaymentPlans = new Array<PolicyPaymentPlanEntity>();

    paymentPlan.clientName = paymentsDto.clientName;
    paymentPlan.clientId = paymentsDto.clientId;
    paymentPlan.numberOfPolicies = paymentsDto.numberOfPolicies;
    paymentPlan.totalPremium = paymentsDto.totalPremium;
    paymentPlan.status = paymentsDto.status;
    paymentPlan.remainingInstallments = paymentsDto.remainingInstallments;
    paymentPlan.amountPaid = paymentsDto.amountPaid;
    paymentPlan.amountOutstanding = paymentsDto.amountOutstanding;
    paymentPlan.numberOfInstallments = paymentsDto.numberOfInstallments;
    paymentPlan.numberOfPaidInstallments = paymentsDto.numberOfPaidInstallments;
    paymentPlan.startDate = paymentsDto.startDate;
    paymentPlan.endDate = paymentsDto.endDate;
    paymentPlan.initialInstallmentAmount = paymentsDto.initialInstallmentAmount;

    for (let installment of paymentsDto.installments) {
      installments.push(installment);
    }

    for (let planReceiptEntity of paymentsDto.planReceipt) {
      planReceiptEntitys.push(planReceiptEntity);
    }
    for (let policyPaymentPlan of paymentsDto.policyPaymentPlan) {
      policyPaymentPlans.push(policyPaymentPlan);
    }
    paymentPlan.installments = installments;
    paymentPlan.planReceipt = planReceiptEntitys;
    paymentPlan.policyPaymentPlan = policyPaymentPlans;

    await this.paymentRepository.save(paymentPlan);
  }
  async findOnePayment(id: string): Promise<PaymentsEntity> {
    return this.paymentRepository.findOneOrFail(id, {
      relations: ['installments', 'plan-receipt', 'policy-payments'],
    });
  }

  async updatePayment(
    id: string,
    paymentsDto: PaymentsDto,
  ): Promise<PaymentsDto & PaymentsEntity> {
    const paymentPlan = new PaymentsEntity();

    const installments = new Array<Installments>();
    const planReceiptEntitys = new Array<PlanReceiptEntity>();
    const policyPaymentPlans = new Array<PolicyPaymentPlanEntity>();

    paymentPlan.clientName = paymentsDto.clientName;
    paymentPlan.clientId = paymentsDto.clientId;
    paymentPlan.numberOfPolicies = paymentsDto.numberOfPolicies;
    paymentPlan.totalPremium = paymentsDto.totalPremium;
    paymentPlan.status = paymentsDto.status;
    paymentPlan.remainingInstallments = paymentsDto.remainingInstallments;
    paymentPlan.amountPaid = paymentsDto.amountPaid;
    paymentPlan.amountOutstanding = paymentsDto.amountOutstanding;
    paymentPlan.numberOfInstallments = paymentsDto.numberOfInstallments;
    paymentPlan.numberOfPaidInstallments = paymentsDto.numberOfPaidInstallments;
    paymentPlan.startDate = paymentsDto.startDate;
    paymentPlan.endDate = paymentsDto.endDate;
    paymentPlan.initialInstallmentAmount = paymentsDto.initialInstallmentAmount;

    for (let installment of paymentsDto.installments) {
      installments.push(installment);
    }

    for (let planReceiptEntity of paymentsDto.planReceipt) {
      planReceiptEntitys.push(planReceiptEntity);
    }
    for (let policyPaymentPlan of paymentsDto.policyPaymentPlan) {
      policyPaymentPlans.push(policyPaymentPlan);
    }
    paymentPlan.installments = installments;
    paymentPlan.planReceipt = planReceiptEntitys;
    paymentPlan.policyPaymentPlan = policyPaymentPlans;

    return this.paymentRepository.save({ ...paymentPlan, id: id });
  }
}
