import { IntermediariesEntity } from './intermediaries.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class SalesRepresentativeEntity extends IntermediariesEntity {
  @Column()
  contactMiddleName: string;
}
