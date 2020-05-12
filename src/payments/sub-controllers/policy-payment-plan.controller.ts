import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { PolicyPaymentDto } from '../dtos/policy-payment-plan.dto';
import { PolicyPaymentPlanService } from '../sub-services/policy-payment-plan.service';

@Controller('policy-payments-plan')
export class PolicyPaymentsController {
  constructor(
    private readonly policyPaymentPlanService: PolicyPaymentPlanService,
  ) {}

  @Get()
  async getllPolicyPaymentPlans() {
    return this.policyPaymentPlanService.findAllPolicyPaymentPlans();
  }

  @Post()
  async createPolicyPaymentPlan(
    @Body() policypaymentPlanDto: PolicyPaymentDto,
  ) {
    return this.policyPaymentPlanService.createPolicyPaymentPlan(
      policypaymentPlanDto,
    );
  }

  @Get(':id')
  async getOnePayment(@Param('id') id: string) {
    return this.policyPaymentPlanService.findOnePolicyPaymentPlan(id);
  }

  @Put(':id')
  async updatePayments(
    @Param('id') id: string,
    @Body() policypaymentPlanDto: PolicyPaymentDto,
  ) {
    return this.policyPaymentPlanService.updatePolicyPaymentPlan(
      id,
      policypaymentPlanDto,
    );
  }
}
