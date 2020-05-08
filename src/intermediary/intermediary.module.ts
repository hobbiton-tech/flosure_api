import { Module } from '@nestjs/common';
import { IntermediaryService } from './intermediary.service';
import { IntermediaryController } from './intermediary.controller';
import { AgentsEntity } from 'src/setups/entities/agents.entity';
import { BrokerEntity } from 'src/setups/entities/broker.entity';
import { SalesRepresentativeEntity } from 'src/setups/entities/sales-representative.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AgentsEntityRepository,
  BrokerEntityRepository,
  SalesRepresentativeEntityRepository,
} from 'src/setups/repositories/intermediaries.repository';
import { Agent } from 'http';

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
