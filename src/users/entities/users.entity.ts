import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  department: string;

  @Column()
  branch: string;

  @Column()
  role: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @Column()
  jobTitle: string;
}
