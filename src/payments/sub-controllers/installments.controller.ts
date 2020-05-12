import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { InstallmentsDto } from '../dtos/installments.dto';
import { InstallmentsService } from '../sub-services/installments.service';

@Controller('installments')
export class InstallmentsController {
  constructor(private readonly installmentService: InstallmentsService) {}

  @Get()
  async getllAllInstallment() {
    return this.installmentService.findAllInstallments();
  }

  @Post()
  async createInstallment(@Body() installmentsDto: InstallmentsDto) {
    return this.installmentService.createInstallment(installmentsDto);
  }

  @Get(':id')
  async getOneInstallment(@Param('id') id: string) {
    return this.installmentService.findOneInstallment(id);
  }

  @Put(':id')
  async updateInstallment(
    @Param('id') id: string,
    @Body() installmentsDto: InstallmentsDto,
  ) {
    return this.installmentService.updateInstallment(id, installmentsDto);
  }
}
