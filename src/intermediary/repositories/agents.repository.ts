import { EntityRepository, Repository } from "typeorm";
import { AgentsEntity } from "../entities/agents.entity";

@EntityRepository(AgentsEntity)
export class AgentsEntityRepository extends Repository<AgentsEntity> {}