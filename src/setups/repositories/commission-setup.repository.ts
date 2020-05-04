import { EntityRepository, Repository } from 'typeorm';
import { CommissionSetup } from '../entities/commission-setup.entity';

@EntityRepository(CommissionSetup)
export class CommissionSetupRepository extends Repository<CommissionSetup> {}
