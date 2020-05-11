import { Module } from '@nestjs/common';
import { QuotationController } from './controllers/quotation/quotation.controller';
import { QuotationRepository } from './repositories/quotation.repository';
import { QuotationService } from './quotation.service';

@Module({
  providers: [QuotationService, QuotationRepository],
  controllers: [QuotationController]
})
export class QuotationsModule {}
