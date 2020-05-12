import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsDto } from './dtos/payments.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}

  @Get()
  async getAllPayments() {
    return this.paymentService.findAllPayments();
  }

  @Post()
  async createPayment(@Body() paymentsDto: PaymentsDto) {
    return this.paymentService.createPayment(paymentsDto);
  }

  @Get(':id')
  async getOnePayment(@Param('id') id: string) {
    return this.paymentService.findOnePayment(id);
  }

  @Put(':id')
  async updatePayments(
    @Param('id') id: string,
    @Body() paymentsDto: PaymentsDto,
  ) {
    return this.paymentService.updatePayment(id, paymentsDto);
  }
}
