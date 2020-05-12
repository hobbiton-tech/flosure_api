import { ApiProperty } from '@nestjs/swagger';

export class PolicyPaymentDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  policyNumber: string;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  client: string;

  @ApiProperty()
  clientCode: string;

  @ApiProperty()
  netPremium: number;

  @ApiProperty()
  allocationStatus: AllocationStatus;
}
export type AllocationStatus =
  | 'Allocated'
  | 'Partially Allocated'
  | 'Unallocated';
