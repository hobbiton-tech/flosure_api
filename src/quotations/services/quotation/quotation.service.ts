import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuotationRepository } from 'src/quotations/repositories/quotation.repository';
import { QuotationDto } from 'src/quotations/dtos/quotation.dto';
import { Quotation } from 'src/quotations/entities/quotation.entity';
import { Discount } from 'src/risks/entities/discount.entity';
import { Load } from 'src/risks/entities/load.entity';
import { Risk } from 'src/risks/entities/risk.entity';
import { QuotationsModule } from 'src/quotations/quotations.module';

@Injectable()
export class QuotationService {
  constructor(private readonly quotationRepository: QuotationRepository) {}

  findAll = async () => {
    return this.quotationRepository.find({
      relations: ['risks', 'risks.loads', 'risks.discounts'],
    });
  };

  createQuotation = async (quotationDto: QuotationDto) => {
    const quotation = new Quotation();
    const risks = new Array<Risk>();
    const loads = new Array<Load>();
    const discounts = new Array<Discount>();

    quotation.basicPremiumSubTotal = quotationDto.basicPremiumSubTotal;
    quotation.branch = quotationDto.branch;
    quotation.client = quotationDto.client;
    quotation.clientCode = quotationDto.clientCode;
    quotation.coverCode = quotationDto.coverCode;
    quotation.currency = quotationDto.currency;
    quotation.dateCreated = quotationDto.dateCreated;
    quotation.endDate = quotationDto.endDate;
    quotation.intermediaryName = quotationDto.intermediaryName;
    quotation.messageCode = quotationDto.messageCode;
    quotation.quarter = quotationDto.quarter;
    quotation.quoteNumber = quotationDto.quoteNumber;
    quotation.receiptStatus = quotationDto.receiptStatus;
    quotation.sourceOfBusiness = quotationDto.sourceOfBusiness;
    quotation.startDate = quotationDto.startDate;
    quotation.status = quotationDto.status;
    quotation.underwritingYear = quotationDto.underwritingYear;
    quotation.user = quotationDto.user;

    for (let risk of quotationDto.risks) {
      for (let load of risk.loads) {
        loads.push(load);
      }

      for (let discount of risk.discounts) {
        discounts.push(discount);
      }

      risks.push(risk);
    }

    quotation.risks = risks;

    await this.quotationRepository.save(quotation);
  };

  findOneQuotation = async (id: string) => {
    return this.quotationRepository.findOneOrFail(id, {
      relations: ['risks', 'risks.loads', 'risks.discounts'],
    });
  };

  updateQuotation = async (id: string, quotationDto: QuotationDto) => {
    const quotation = new Quotation();
    const risks = new Array<Risk>();
    const loads = new Array<Load>();
    const discounts = new Array<Discount>();

    quotation.basicPremiumSubTotal = quotationDto.basicPremiumSubTotal;
    quotation.branch = quotationDto.branch;
    quotation.client = quotationDto.client;
    quotation.clientCode = quotationDto.clientCode;
    quotation.coverCode = quotationDto.coverCode;
    quotation.currency = quotationDto.currency;
    quotation.dateCreated = quotationDto.dateCreated;
    quotation.endDate = quotationDto.endDate;
    quotation.intermediaryName = quotationDto.intermediaryName;
    quotation.messageCode = quotationDto.messageCode;
    quotation.quarter = quotationDto.quarter;
    quotation.quoteNumber = quotationDto.quoteNumber;
    quotation.receiptStatus = quotationDto.receiptStatus;
    quotation.sourceOfBusiness = quotationDto.sourceOfBusiness;
    quotation.startDate = quotationDto.startDate;
    quotation.status = quotationDto.status;
    quotation.underwritingYear = quotationDto.underwritingYear;
    quotation.user = quotationDto.user;

    for (let risk of quotationDto.risks) {
      for (let load of risk.loads) {
        loads.push(load);
      }

      for (let discount of risk.discounts) {
        discounts.push(discount);
      }

      risks.push(risk);
    }

    quotation.risks = risks;
    return this.quotationRepository.save({ ...quotationDto, id: id });
  };
}
