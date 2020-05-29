import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export abstract class ClientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  clientID: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  dateCreated: Date;

  @Column({ nullable: true })
  dateUpdated: Date;

  @Column()
  clientType: ClientType;

  @Column()
  status: ClientStatus;

  @Column({ nullable: true })
  accountName: string;

  @Column({ nullable: true })
  accountNumber: string;

  @Column({ nullable: true })
  bank: string;

  @Column({ nullable: true })
  branch: string;

  @Column({ nullable: true })
  accountType: string;
}

export type ClientType = 'Individual' | 'Corporate';
export type ClientStatus = 'Active' | 'Inactive';
