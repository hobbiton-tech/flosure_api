
import { Column, Entity } from 'typeorm';
import { IntermediariesEntity } from 'src/intermediary/entities/intermediaries.entity';

@Entity()
export class SalesRepresentativeEntity extends IntermediariesEntity {
  @Column()
  contactMiddleName: string;
}
