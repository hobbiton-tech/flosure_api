import { ClientEntity } from './client.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class CorperateClientEntity extends ClientEntity {
  @Column()
  registrationNumber: string;

  @Column()
  contactFirstName: string;

  @Column()
  contactLastName: string;

  @Column()
  contactEmail: string;

  @Column()
  companyName: string;

  @Column()
  taxPin: number;
}
