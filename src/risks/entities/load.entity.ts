import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Risk } from '../entities/risk.entity';

@Entity()
export class Load {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  loadType: LoadType;

  @Column()
  amount: number;

  @ManyToOne(
    type => Risk,
    risk => risk.loads,
  )
  risk: Risk;
}

export type LoadType =
  | 'Increased Third Party Limit'
  | 'Riot And Strike'
  | 'Car Stereo'
  | 'Territorial Extension'
  | 'Loss Of Use'
  | 'Inexperienced Driver'
  | 'Under Age Driver';
