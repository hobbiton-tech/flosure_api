import { ApiProperty } from '@nestjs/swagger';
import {
  PolicyStatus,
  ProductType,
  ReceiptStatus,
  PaymentPlan,
  SourceOfBusinessType,
} from '../entities/policy.entity';
import { Risk } from 'src/risks/entities/risk.entity';
import { RiskDto } from 'src/risks/dtos/risk.dto';

export class PolicyDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly policyNumber: string;

  @ApiProperty()
  readonly product: string;

  @ApiProperty()
  readonly startDate: Date;

  @ApiProperty()
  readonly endDate: Date;

  @ApiProperty()
  readonly client: string;

  @ApiProperty()
  readonly clientCode: string;

  @ApiProperty()
  readonly nameOfInsured: string;

  @ApiProperty()
  readonly branch: string;

  @ApiProperty()
  readonly insuranceCompany: string;

  @ApiProperty()
  readonly currency: string;

  @ApiProperty()
  readonly sumInsured: string;

  @ApiProperty()
  readonly preparedBy: string;

  @ApiProperty()
  readonly status: PolicyStatus;

  @ApiProperty()
  readonly timeOfIssue: Date;

  @ApiProperty()
  readonly expiryDate: Date;

  @ApiProperty()
  readonly dateOfIssue: Date;

  @ApiProperty()
  readonly quarter: string;

  @ApiProperty()
  readonly user: string;

  @ApiProperty()
  readonly town: string;

  @ApiProperty()
  readonly productType: ProductType;

  @ApiProperty()
  readonly netPremium: string;

  @ApiProperty()
  readonly underwritingYear: Date;

  @ApiProperty()
  readonly receiptStatus: ReceiptStatus;

  @ApiProperty()
  paymentPlan: PaymentPlan;

  @ApiProperty()
  readonly sourceOfBusiness: SourceOfBusinessType;

  @ApiProperty()
  readonly intermediaryName: string;

  @ApiProperty()
  risks: Risk[];
}
