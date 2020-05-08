export class SalesRepresentativesDto {
  id: string;
  intermediaryId: string;
  contactFirstName: string;
  contactMiddleName: string;
  contactLastName: string;
  contactEmail: string;
  contactPhone: string;
  contactAddess: string;
  accountName: string;
  accountNumber: number;
  accountType: string;
  bank: string;
  branch: string;
  dateCreated: Date;
  intermediaryType: IntermediaryType;
}

export type IntermediaryType = 'Agent' | 'Broker' | 'Sales Representative';
