import { EntityRepository, Repository } from "typeorm";
import { SalesRepresentativeEntity } from "src/setups/entities/sales-representative.entity";

@EntityRepository(SalesRepresentativeEntity)
export class SalesRepresentativeEntityRepository extends Repository<
  SalesRepresentativeEntity
> {}