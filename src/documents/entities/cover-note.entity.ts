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
export class CoverNote {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  certificateNumber: string;

  @Column()
  dateCreated: Date;

  @Column()
  dateUpdated: Date;

  @ManyToOne(
    type => Policy,
    x => x.coverNotes,
  )
  policy: Policy;
}
