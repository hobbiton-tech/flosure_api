import { ApiProperty } from '@nestjs/swagger';
import { ProductType } from 'src/policies/entities/policy.entity';
import { InsuranceType } from '../entities/risk.entity';

export class RiskDto {
  @ApiProperty()
  readonly riskStartDate: Date;

  @ApiProperty()
  readonly riskEndDate: Date;

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
  estimatedValue: number;

  @ApiProperty()
  productType: ProductType;

  @ApiProperty()
  insuranceType: InsuranceType;

  @ApiProperty()
  sumInsured: number;

  @ApiProperty()
  premiumRate: number;

  @ApiProperty()
  basicPremium: number;

  @ApiProperty()
  loadingTotal: number;

  @ApiProperty()
  discountTotal: number;

  @ApiProperty()
  discountSubTotal: number;

  @ApiProperty()
  discountRate: number;

  @ApiProperty()
  premiumLevy: number;

  @ApiProperty()
  netPremium: number;
}
