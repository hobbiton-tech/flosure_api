import { ClientEntity } from './client.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class IndividualClientEntity extends ClientEntity {
  @Column()
  title: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  maritalStatus: string;

  @Column({ nullable: true })
  nationality: string;

  @Column()
  gender: GenderType;

  @Column()
  idType: IDType;

  @Column()
  idNumber: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column()
  occupation: OccupationType;
}
export type GenderType = 'Male' | 'Female';
export type OccupationType = 'Employed | Unemployed | Student';
export type IDType = 'NRC' | 'Passport' | 'License';
