import { ApiProperty } from '@nestjs/swagger';

export class InstallmentsDto {
  @ApiProperty()
  installmentAmount: number;

  @ApiProperty()
  installmentDate: Date;

  @ApiProperty()
  actualPaidDate?: Date;

  @ApiProperty()
  installmentStatus: InstallmentStatus;

  @ApiProperty()
  balance: number;
}
export type InstallmentStatus = 'Fully Paid' | 'Partially Paid' | 'UnPaid';
