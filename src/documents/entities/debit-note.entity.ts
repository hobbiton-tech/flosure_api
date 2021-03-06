import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { Policy } from '../../policies/entities/policy.entity';

@Entity()
export class DebitNote {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  debitNoteNumber: string;

  @Column()
  remarks: string;

  @Column()
  dateCreated: Date;

  @Column()
  dateUpdated: Date;

  @ManyToOne(
    type => Policy,
    x => x.debitNotes,
  )
  policy: Policy;
}
