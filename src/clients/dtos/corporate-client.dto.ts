export class CorporateClientsDto {
  id: string;
  email?: string;
  phone: string;
  address: string;
  dateCreated: Date;
  dateUpdated: Date;
  clientType: ClientType;
  status: ClientStatus;
  accountName: string;
  accountNumber: number;
  bank: string;
  branch: string;
  accountType: string;

  registrationNumber: string;
  clientID: string;
  contactFirstName: string;
  contactLastName: string;
  contactEmail: string;
  companyName: string;
  taxPin: number;
}

export type ClientType = 'Individual' | 'Corporate';
export type ClientStatus = 'Active' | 'Inactive';
export type GenderType = 'Male' | 'Female';
export type OccupationType = 'Employed | Unemployed | Student';
export type IDType = 'NRC' | 'Passport' | 'License';
