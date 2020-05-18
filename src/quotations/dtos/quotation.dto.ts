import { ApiProperty } from '@nestjs/swagger';
import {
  QuoteStatus,
  ReceiptStatus,
  SourceOfBusinessType,
} from '../entities/quotation.entity';
import { Risk } from 'src/risks/entities/risk.entity';

export class QuotationDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly user: string;

  @ApiProperty()
  readonly client: string;

  @ApiProperty()
  readonly quoteNumber: string;

  @ApiProperty()
  readonly dateCreated: Date;

  @ApiProperty()
  readonly clientCode: string;

  @ApiProperty()
  readonly messageCode: string;

  @ApiProperty()
  readonly coverCode: string;

  @ApiProperty()
  readonly underwritingYear: Date;

  @ApiProperty()
  readonly branch: string;

  @ApiProperty()
  readonly currency: string;

  @ApiProperty()
  readonly startDate: Date;

  @ApiProperty()
  readonly endDate: Date;

  @ApiProperty()
  readonly status: QuoteStatus;

  @ApiProperty()
  readonly basicPremiumSubTotal: string;

  @ApiProperty()
  readonly receiptStatus: ReceiptStatus;

  @ApiProperty()
  readonly sourceOfBusiness: SourceOfBusinessType;

  @ApiProperty()
  readonly intermediaryName: string;

  @ApiProperty()
  readonly quarter: string;

  @ApiProperty()
  risks: Risk[];
}
