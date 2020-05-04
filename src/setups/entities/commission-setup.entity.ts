import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class CommissionSetup {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  intermediaryName: string;

  @Column()
  intermediaryType: string;

  @Column()
  productClass: string;

  @Column()
  productName: string;

  @Column()
  commission: number;
}
