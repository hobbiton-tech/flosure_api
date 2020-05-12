import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PolicyPaymentPlanEntity } from '../entities/policy-payment-plan.entity';
import { PolicyPaymentEntityRepository } from '../repositories/policy-payment-plan.repository';
import { PolicyPaymentDto } from '../dtos/policy-payment-plan.dto';

@Injectable()
export class PolicyPaymentPlanService {
  constructor(
    @InjectRepository(PolicyPaymentPlanEntity)
    private readonly policyPaymentEntityRepository: PolicyPaymentEntityRepository,
  ) {}

  async findAllPolicyPaymentPlans(): Promise<PolicyPaymentPlanEntity[]> {
    return this.policyPaymentEntityRepository.find({});
  }

  async createPolicyPaymentPlan(
    policyPaymentDto: PolicyPaymentDto,
  ): Promise<PolicyPaymentDto & PolicyPaymentPlanEntity> {
    return this.policyPaymentEntityRepository.save(policyPaymentDto);
  }

  async findOnePolicyPaymentPlan(id: string): Promise<PolicyPaymentPlanEntity> {
    return this.policyPaymentEntityRepository.findOneOrFail(id);
  }

  async updatePolicyPaymentPlan(
    id: string,
    policyPaymentDto: PolicyPaymentDto,
  ): Promise<PolicyPaymentDto & PolicyPaymentPlanEntity> {
    return this.policyPaymentEntityRepository.save({
      ...policyPaymentDto,
      id: id,
    });
  }
}
