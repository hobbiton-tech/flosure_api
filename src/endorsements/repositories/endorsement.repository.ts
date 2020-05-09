import { EntityRepository, Repository } from 'typeorm';
import { Endorsement } from '../entities/endorsement.entity';

@EntityRepository(Endorsement)
export class EndorsementRepository extends Repository<Endorsement> {}
