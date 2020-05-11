import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgentsEntity } from './entities/agents.entity';
import { AgentsEntityRepository } from './repositories/agents.repository';
import { BrokerEntity } from './entities/broker.entity';
import { BrokerEntityRepository } from './repositories/broker.repository';
import { SalesRepresentativeEntity } from 'src/setups/entities/sales-representative.entity';
import { SalesRepresentativeEntityRepository } from './repositories/sales-representative.repository';
import { AgentsDto } from './dtos/agents.dto';
import { BrokersDto } from './dtos/brokers.dto';
import { SalesRepresentativesDto } from './dtos/sales-representatives.dto';


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
