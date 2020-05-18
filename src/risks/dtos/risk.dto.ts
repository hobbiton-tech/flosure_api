import { ApiProperty } from '@nestjs/swagger';
import { ProductType } from 'src/policies/entities/policy.entity';
import { InsuranceType } from '../entities/risk.entity';

export class RiskDto {
  @ApiProperty()
  readonly riskStartDate: Date;

  @ApiProperty()
  readonly riskEndDate: Date;

  @ApiProperty()
  readonly riskQuarter: string;

  @ApiProperty()
  readonly regNumber: string;

  @ApiProperty()
  readonly vehicleMake: string;

  @ApiProperty()
  vehicleModel: string;

  @ApiProperty()
  yearOfManufacture: Date;

  @ApiProperty()
  engineNumber: string;

  @ApiProperty()
  chassisNumber: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  estimatedValue: string;

  @ApiProperty()
  productType: ProductType;

  @ApiProperty()
  insuranceType: InsuranceType;

  @ApiProperty()
  sumInsured: string;

  @ApiProperty()
  premiumRate: string;

  @ApiProperty()
  basicPremium: string;

  @ApiProperty()
  loadingTotal: string;

  @ApiProperty()
  discountTotal: string;

  @ApiProperty()
  discountSubTotal: string;

  @ApiProperty()
  discountRate: string;

  @ApiProperty()
  premiumLevy: string;

  @ApiProperty()
  netPremium: string;
}
