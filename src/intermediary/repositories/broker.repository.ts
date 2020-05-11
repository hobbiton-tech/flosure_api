import { EntityRepository, Repository } from "typeorm";
import { BrokerEntity } from "../entities/broker.entity";

@EntityRepository(BrokerEntity)
export class BrokerEntityRepository extends Repository<BrokerEntity> {}