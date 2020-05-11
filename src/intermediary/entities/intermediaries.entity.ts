import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export abstract class IntermediariesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  intermediaryId: string;

  @Column()
  contactFirstName: string;

  @Column()
  contactLastName: string;

  @Column()
  contactEmail: string;

  @Column()
  contactPhone: string;

  @Column()
  contactAddess: string;

  @Column()
  accountName: string;

  @Column()
  accountNumber: number;

  @Column()
  accountType: string;

  @Column()
  bank: string;

  @Column()
  branch: string;

  @Column()
  dateCreated: Date;

  @Column()
  intermediaryType: IntermediaryType;
}

export type IntermediaryType = 'Agent' | 'Broker' | 'Sales Representative';
