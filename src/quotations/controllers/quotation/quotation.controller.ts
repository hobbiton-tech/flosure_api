import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { QuotationDto } from 'src/quotations/dtos/quotation.dto';
import { QuotationService } from 'src/quotations/quotation.service';

@Controller('quotation')
export class QuotationController {
  constructor(private readonly quotationService: QuotationService) {}

  @Get()
  getAllQuotations() {
    return this.quotationService.findAll();
  }

  @Post()
  createPolicy(@Body() quotationDto: QuotationDto) {
    return this.quotationService.createQuotation(quotationDto);
  }

  @Get(':id')
  getOneQuotation(@Param('id') id: string) {
    return this.quotationService.findOneQuotation(id);
  }

  @Put(':id')
  updateQuotation(@Param('id') id: string, @Body() quotationDto: QuotationDto) {
    return this.quotationService.updateQuotation(id, quotationDto);
  }
}
