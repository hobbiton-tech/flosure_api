import { Module } from '@nestjs/common';
import { IntermediaryService } from './intermediary.service';
import { IntermediaryController } from './intermediary.controller';
import { SalesRepresentativeEntity } from 'src/setups/entities/sales-representative.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentsEntity } from './entities/agents.entity';
import { BrokerEntity } from './entities/broker.entity';
import { AgentsEntityRepository } from './repositories/agents.repository';
import { BrokerEntityRepository } from './repositories/broker.repository';
import { SalesRepresentativeEntityRepository } from './repositories/sales-representative.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      AgentsEntity,
      BrokerEntity,
      SalesRepresentativeEntity,
      AgentsEntityRepository,
      BrokerEntityRepository,
      SalesRepresentativeEntityRepository,
    ]),
  ],
  providers: [IntermediaryService],
  controllers: [IntermediaryController],
})
export class IntermediaryModule {}
