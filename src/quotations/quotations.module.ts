import { Module } from '@nestjs/common';
import { QuotationService } from './services/quotation/quotation.service';
import { QuotationController } from './controllers/quotation/quotation.controller';
import { QuotationRepository } from './repositories/quotation.repository';

@Module({
  providers: [QuotationService, QuotationRepository],
  controllers: [QuotationController]
})
export class QuotationsModule {}
