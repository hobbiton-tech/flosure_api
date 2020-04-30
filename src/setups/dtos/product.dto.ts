import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  readonly productName: string;

  @ApiProperty()
  readonly productCode: number;

  @ApiProperty()
  readonly productDescription: string;

  @ApiProperty()
  readonly productPolicyNumberPrefix: string;

  @ApiProperty()
  readonly productClaimNumberPrefix: string;
}
