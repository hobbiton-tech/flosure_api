import { ApiProperty } from '@nestjs/swagger';

export class ReceiptDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  receiptNumber?: string;

  @ApiProperty()
  tpinNumber?: number;

  @ApiProperty()
  onBehalfOf: string;

  @ApiProperty()
  address?: string;

  @ApiProperty()
  sumInWords?: string;

  @ApiProperty()
  dateRecieved?: Date;

  @ApiProperty()
  paymentMethod: string;

  @ApiProperty()
  policyNumber?: string;

  @ApiProperty()
  todayDate: Date;

  @ApiProperty()
  sumInDigits: number;

  @ApiProperty()
  capturedBy: string;

  @ApiProperty()
  receivedFrom: string;

  @ApiProperty()
  narration: string;

  @ApiProperty()
  receiptType: string;

  @ApiProperty()
  receiptStatus: ReceiptStatus;

  @ApiProperty()
  remarks?: string;

  @ApiProperty()
  sourceOfBusiness?: string;

  @ApiProperty()
  intermediaryName?: string;
}

export type SourceOfBusinessType =
  | 'Direct'
  | 'Broker'
  | 'Agent'
  | 'Sales Representative';
export type ReceiptStatus = 'Receipted' | 'Cancelled';
