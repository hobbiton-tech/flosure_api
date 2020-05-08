export class BrokersDto {
  id: string;
  intermediaryId: string;
  companyName: string;
  tPinNumber: string;
  registrationNumber: string;
  email: string;
  phone: string;
  address: string;
  contactFirstName: string;
  contactLastName: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  accountName: string;
  accountNumber: number;
  accountType: string;
  bank: string;
  branch: string;
  dateCreated: Date;
  intermediaryType: IntermediaryType;
}

export type IntermediaryType = 'Agent' | 'Broker' | 'Sales Representative';
