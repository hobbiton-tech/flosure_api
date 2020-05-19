import { ApiProperty } from '@nestjs/swagger';

export class CorporateClientsDto {
  id: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  dateCreated: Date;

  @ApiProperty()
  dateUpdated: Date;

  @ApiProperty()
  clientType: ClientType;

  @ApiProperty()
  status: ClientStatus;

  @ApiProperty()
  accountName: string;

  @ApiProperty()
  accountNumber: number;

  @ApiProperty()
  bank: string;

  @ApiProperty()
  branch: string;

  @ApiProperty()
  accountType: string;

  @ApiProperty()
  registrationNumber: string;

  @ApiProperty()
  clientID: string;

  @ApiProperty()
  contactFirstName: string;

  @ApiProperty()
  contactLastName: string;

  @ApiProperty()
  contactEmail: string;

  @ApiProperty()
  companyName: string;

  @ApiProperty()
  taxPin: number;
}

export type ClientType = 'Individual' | 'Corporate';
export type ClientStatus = 'Active' | 'Inactive';
export type GenderType = 'Male' | 'Female';
export type OccupationType = 'Employed | Unemployed | Student';
export type IDType = 'NRC' | 'Passport' | 'License';
