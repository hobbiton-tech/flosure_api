import { ApiProperty } from '@nestjs/swagger';

export class IndividualClientsDto {
  id: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  clientID: string;

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
  title: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  middleName: string;

  @ApiProperty()
  maritalStatus: string;

  @ApiProperty()
  nationality: string;

  @ApiProperty()
  gender: GenderType;

  @ApiProperty()
  idType: IDType;

  @ApiProperty()
  idNumber: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  occupation: OccupationType;
}
export type GenderType = 'Male' | 'Female';
export type OccupationType = 'Employed | Unemployed | Student';
export type IDType = 'NRC' | 'Passport' | 'License';
export type ClientType = 'Individual' | 'Corporate';
export type ClientStatus = 'Active' | 'Inactive';
