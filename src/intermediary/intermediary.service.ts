import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgentsEntity } from 'src/setups/entities/agents.entity';
import { BrokerEntity } from 'src/setups/entities/broker.entity';
import { SalesRepresentativeEntity } from 'src/setups/entities/sales-representative.entity';
import { AgentsDto } from '../setups/dtos/agents.dto';
import {} from 'typeorm';
import { BrokersDto } from '../setups/dtos/brokers.dto';
import { SalesRepresentativesDto } from '../setups/dtos/sales-representatives.dto';
import {
  AgentsEntityRepository,
  BrokerEntityRepository,
  SalesRepresentativeEntityRepository,
} from 'src/setups/repositories/intermediaries.repository';

@Injectable()
export class IntermediaryService {
  constructor(
    @InjectRepository(AgentsEntity)
    private readonly agentsEntityRepository: AgentsEntityRepository,
    @InjectRepository(BrokerEntity)
    private readonly brokerEntityRepository: BrokerEntityRepository,
    @InjectRepository(SalesRepresentativeEntity)
    private readonly salesRepresentativeEntityRepository: SalesRepresentativeEntityRepository,
  ) {}

  /**
   * this is section is for agents.
   */
  async findAllAgents(): Promise<AgentsEntity[]> {
    return this.agentsEntityRepository.find({});
  }

  async createAgent(agentsDto: AgentsDto): Promise<AgentsDto & AgentsEntity> {
    return this.agentsEntityRepository.save(agentsDto);
  }

  async findOneAgent(id: string): Promise<AgentsEntity> {
    return this.agentsEntityRepository.findOneOrFail(id);
  }

  async updateAgent(
    id: string,
    agentsDto: AgentsDto,
  ): Promise<AgentsDto & AgentsEntity> {
    return this.agentsEntityRepository.save({
      ...agentsDto,
      id: id,
    });
  }

  /**
   * this is section is for brokers.
   */
  async findAllBrokers(): Promise<BrokerEntity[]> {
    return this.brokerEntityRepository.find({});
  }

  async createBroker(
    brokerDto: BrokersDto,
  ): Promise<BrokersDto & BrokerEntity> {
    return this.brokerEntityRepository.save(brokerDto);
  }

  async findOneBroker(id: string): Promise<BrokerEntity> {
    return this.brokerEntityRepository.findOneOrFail(id);
  }

  async updateBroker(
    id: string,
    brokerDto: BrokersDto,
  ): Promise<BrokersDto & BrokerEntity> {
    return this.brokerEntityRepository.save({
      ...brokerDto,
      id: id,
    });
  }

  /**
   * this is section is for brokers.
   */
  async findAllSalesRepresentatives(): Promise<SalesRepresentativeEntity[]> {
    return this.salesRepresentativeEntityRepository.find({});
  }

  async createSalesRepresentative(
    salesRepresentativeDto: SalesRepresentativesDto,
  ): Promise<SalesRepresentativesDto & SalesRepresentativeEntity> {
    return this.salesRepresentativeEntityRepository.save(
      salesRepresentativeDto,
    );
  }

  async findOneSalesRepresentative(
    id: string,
  ): Promise<SalesRepresentativeEntity> {
    return this.salesRepresentativeEntityRepository.findOneOrFail(id);
  }

  async updateSalesRepresentative(
    id: string,
    salesRepresentativeDto: SalesRepresentativesDto,
  ): Promise<SalesRepresentativesDto & SalesRepresentativeEntity> {
    return this.salesRepresentativeEntityRepository.save({
      ...salesRepresentativeDto,
      id: id,
    });
  }
}
