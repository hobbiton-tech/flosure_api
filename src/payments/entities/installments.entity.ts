import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PaymentsEntity } from './payments.entity';

@Entity()
export class Installments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  installmentAmount: number;

  @Column()
  installmentDate: Date;

  @Column()
  actualPaidDate?: Date;

  @Column()
  installmentStatus: InstallmentStatus;

  @Column()
  balance: number;

  @ManyToOne(
    type => PaymentsEntity,
    x => x.installments,
  )
  paymentsEntity: PaymentsEntity;
}

export type InstallmentStatus = 'Fully Paid' | 'Partially Paid' | 'UnPaid';
