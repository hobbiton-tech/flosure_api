import { EntityRepository, Repository } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';

@EntityRepository(UsersEntity)
export class UsersEntityRepository extends Repository<UsersEntity> {}
