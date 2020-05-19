import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanReceiptsService } from './sub-services/plan-receipts.service';
import { InstallmentsService } from './sub-services/installments.service';
import { PlanReceiptsController } from './sub-controllers/plan-receipts.controller';
import { InstallmentsController } from './sub-controllers/installments.controller';
import { PolicyPaymentPlanService } from './sub-services/policy-payment-plan.service';
import { PolicyPaymentsController } from './sub-controllers/policy-payment-plan.controller';
import { Installments } from './entities/installments.entity';
import { PlanReceiptEntity } from './entities/plan-receipt.entity';
import { PolicyPaymentPlanEntity } from './entities/policy-payment-plan.entity';
import { PaymentsEntity } from './entities/payments.entity';
import { PaymentsRepository } from './repositories/payments.repository';
import { InstallmentEntityRepository } from './repositories/installments.repository';
import { PlanReceiptEntitRepository } from './repositories/plan-receipt.repository';
import { PolicyPaymentEntityRepository } from './repositories/policy-payment-plan.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PaymentsEntity,
      Installments,
      PlanReceiptEntity,
      PolicyPaymentPlanEntity,
      PaymentsRepository,
      InstallmentEntityRepository,
      PlanReceiptEntitRepository,
      PolicyPaymentEntityRepository,
    ]),
  ],
  providers: [
    PaymentsService,
    PlanReceiptsService,
    InstallmentsService,
    PolicyPaymentPlanService,
  ],
  controllers: [
    PaymentsController,
    PlanReceiptsController,
    InstallmentsController,
    PolicyPaymentsController,
  ],
})
export class PaymentsModule {}
