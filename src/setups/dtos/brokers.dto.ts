import { ApiProperty } from '@nestjs/swagger';

export class BrokersDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  intermediaryId: string;

  @ApiProperty()
  companyName: string;

  @ApiProperty()
  tPinNumber: string;

  @ApiProperty()
  registrationNumber: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  contactFirstName: string;

  @ApiProperty()
  contactLastName: string;

  @ApiProperty()
  contactEmail: string;

  @ApiProperty()
  contactPhone: string;

  @ApiProperty()
  contactAddress: string;

  @ApiProperty()
  accountName: string;

  @ApiProperty()
  accountNumber: number;

  @ApiProperty()
  accountType: string;

  @ApiProperty()
  bank: string;

  @ApiProperty()
  branch: string;

  @ApiProperty()
  dateCreated: Date;

  @ApiProperty()
  intermediaryType: IntermediaryType;
}

export type IntermediaryType = 'Agent' | 'Broker' | 'Sales Representative';
