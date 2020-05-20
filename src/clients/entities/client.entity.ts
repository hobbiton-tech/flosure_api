import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export abstract class ClientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  clientID: string;

  @Column()
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
  accountNumber: number;

  @Column({ nullable: true })
  bank: string;

  @Column({ nullable: true })
  branch: string;

  @Column({ nullable: true })
  accountType: string;
}

export type ClientType = 'Individual' | 'Corporate';
export type ClientStatus = 'Active' | 'Inactive';
