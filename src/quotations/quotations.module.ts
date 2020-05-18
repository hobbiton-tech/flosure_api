import { Module } from '@nestjs/common';
import { QuotationController } from './controllers/quotation/quotation.controller';
import { QuotationRepository } from './repositories/quotation.repository';
import { QuotationService } from './quotation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quotation } from './entities/quotation.entity';
import { RiskRepository } from 'src/risks/repositories/risk.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quotation, QuotationRepository, RiskRepository]),
  ],
  providers: [QuotationService],
  controllers: [QuotationController],
})
export class QuotationsModule {}
