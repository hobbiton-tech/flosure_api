import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanReceiptEntity } from '../entities/plan-receipt.entity';
import { PlanReceiptEntitRepository } from '../repositories/plan-receipt.repository';
import { PlanReceiptDto } from '../dtos/plan-receipt.dto';

@Injectable()
export class PlanReceiptsService {
  constructor(
    @InjectRepository(PlanReceiptEntity)
    private readonly planReceiptEntitRepository: PlanReceiptEntitRepository,
  ) {}

  async findAllPlanReceipts(): Promise<PlanReceiptEntity[]> {
    return this.planReceiptEntitRepository.find({});
  }

  async createPlanReceipt(
    planReceiptDto: PlanReceiptDto,
  ): Promise<PlanReceiptDto & PlanReceiptEntity> {
    return this.planReceiptEntitRepository.save(planReceiptDto);
  }

  async findOnePlanReceiptt(id: string): Promise<PlanReceiptEntity> {
    return this.planReceiptEntitRepository.findOneOrFail(id);
  }

  async updatePlanReceipt(
    id: string,
    planReceiptDto: PlanReceiptDto,
  ): Promise<PlanReceiptDto & PlanReceiptEntity> {
    return this.planReceiptEntitRepository.save({
      ...planReceiptDto,
      id: id,
    });
  }
}
