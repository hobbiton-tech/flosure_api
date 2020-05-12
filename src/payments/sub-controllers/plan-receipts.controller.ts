import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { PlanReceiptsService } from '../sub-services/plan-receipts.service';
import { PlanReceiptDto } from '../dtos/plan-receipt.dto';

@Controller('installments')
export class PlanReceiptsController {
  constructor(private readonly planReceiptsService: PlanReceiptsService) {}

  @Get()
  async getAllPlanReceipt() {
    return this.planReceiptsService.findAllPlanReceipts();
  }

  @Post()
  async createPlanReceipt(@Body() installmentsDto: PlanReceiptDto) {
    return this.planReceiptsService.createPlanReceipt(installmentsDto);
  }

  @Get(':id')
  async getOnePlanReceipt(@Param('id') id: string) {
    return this.planReceiptsService.findOnePlanReceiptt(id);
  }

  @Put(':id')
  async updatePlanReceipt(
    @Param('id') id: string,
    @Body() planReceiptDto: PlanReceiptDto,
  ) {
    return this.planReceiptsService.updatePlanReceipt(id, planReceiptDto);
  }
}
