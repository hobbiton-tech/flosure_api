import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export abstract class ClientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  phone: string;

  @Column()
  clientID: string;

  @Column()
  address: string;

  @Column()
  dateCreated: Date;

  @Column()
  dateUpdated: Date;

  @Column()
  clientType: ClientType;

  @Column()
  status: ClientStatus;

  @Column()
  accountName: string;

  @Column()
  accountNumber: number;

  @Column()
  bank: string;

  @Column()
  branch: string;

  @Column()
  accountType: string;
}

export type ClientType = 'Individual' | 'Corporate';
export type ClientStatus = 'Active' | 'Inactive';
