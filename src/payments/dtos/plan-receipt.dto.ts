import { ApiProperty } from '@nestjs/swagger';

export class PlanReceiptDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  receiptNumber?: string;

  @ApiProperty()
  onBehalfOf: string;

  @ApiProperty()
  sumInDigits: number;

  @ApiProperty()
  allocationStatus: AllocationStatus;

  @ApiProperty()
  policyNumber: string;
}
export type AllocationStatus =
  | 'Allocated'
  | 'Partially Allocated'
  | 'Unallocated';
