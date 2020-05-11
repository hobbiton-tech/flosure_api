export class individualClientsDto {
  id: string;
  email?: string;
  phone: string;
  clientID: string;
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

  title: string;
  firstName: string;
  lastName: string;
  middleName: string;
  maritalStatus: string;
  nationality: string;
  gender: GenderType;
  idType: IDType;
  idNumber: string;
  dateOfBirth: Date;
  occupation: OccupationType;
}
export type GenderType = 'Male' | 'Female';
export type OccupationType = 'Employed | Unemployed | Student';
export type IDType = 'NRC' | 'Passport' | 'License';
export type ClientType = 'Individual' | 'Corporate';
export type ClientStatus = 'Active' | 'Inactive';
