import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { type } from 'os';
import { Policy } from '../../policies/entities/policy.entity';

@Entity()
export class Endorsement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: EndorsementType;

  @Column()
  remark: string;

  @Column()
  dateCreated: Date;

  @Column()
  dateUpdated: Date;

  @Column()
  status: EndorsementStatus;

  @Column()
  effectDate: Date;

  @OneToOne(type => Policy)
  @JoinColumn()
  policy: Policy;
}

export type EndorsementType =
  | 'Revision Of Cover'
  | 'Cancellation Of Cover'
  | 'Extension Of Cover';
export type EndorsementStatus = 'Pending' | 'Approved';
