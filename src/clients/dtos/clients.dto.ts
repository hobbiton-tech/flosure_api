export /*abstract*/ class ClientsDto {
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
  accountNumber: string;
  bank: string;
  branch: string;
  accountType: string; // account Details: Account Details; // quotes: Quote[]; Il claims: Claim[];

  //unique to individual client
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

  //unique to corperate client
  registrationNumber: string;
  contactFirstName: string;
  contactLastName: string;
  contactEmail: string;
  companyName: string;
  taxPin: string;
}

export type ClientType = 'Individual' | 'Corporate';
export type ClientStatus = 'Active' | 'Inactive';
export type GenderType = 'Male' | 'Female';
export type OccupationType = 'Employed | Unemployed | Student';
export type IDType = 'NRC' | 'Passport' | 'License';

// export class CreateCorporateClientDto {

// }

// export class CreateIndividualClientDTO {

// }
