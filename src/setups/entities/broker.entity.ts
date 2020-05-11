import { IntermediariesEntity } from './intermediaries.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class BrokerEntity extends IntermediariesEntity {
  @Column()
  companyName: string;

  @Column()
  tPinNumber: string;

  @Column()
  registrationNumber: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;
}
