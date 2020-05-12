import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { ReceiptEntity } from './entities/receipt.entity';
import { ReceiptDto } from './dtos/receipt.dto';

@Controller('receipt')
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Get('receipt/:id')
  async findOnereceipt(@Param('id') id: string): Promise<ReceiptEntity> {
    return this.receiptService.findOneReceipt(id);
  }

  @Get()
  async getAllreceipts(): Promise<ReceiptEntity[]> {
    return this.receiptService.findAllReceipts();
  }

  @Post()
  async createAgent(
    @Body() receiptDto: ReceiptDto,
  ): Promise<ReceiptDto & ReceiptEntity> {
    return this.receiptService.createReceipt(receiptDto);
  }

  @Put('receipt/:id')
  async updateReceipt(
    @Param('id') id: string,
    @Body() receiptDto: ReceiptDto,
  ): Promise<ReceiptDto & ReceiptEntity> {
    return this.receiptService.updateReceipt(id, receiptDto);
  }
}
