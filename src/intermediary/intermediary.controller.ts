import { Controller, Post, Body, Param, Put, Get } from '@nestjs/common';
import { IntermediaryService } from './intermediary.service';
import { AgentsEntity } from 'src/setups/entities/agents.entity';
import { BrokerEntity } from 'src/setups/entities/broker.entity';
import { SalesRepresentativeEntity } from 'src/setups/entities/sales-representative.entity';
import { AgentsDto } from 'src/setups/dtos/agents.dto';
import { BrokersDto } from 'src/setups/dtos/brokers.dto';
import { SalesRepresentativesDto } from 'src/setups/dtos/sales-representatives.dto';

@Controller('intermediary')
export class IntermediaryController {
  constructor(private readonly intermediaryService: IntermediaryService) {}

  @Get('agent/:id')
  async findOneAgents(@Param('id') id: string): Promise<AgentsEntity> {
    return this.intermediaryService.findOneAgent(id);
  }

  @Get('agent')
  async getAllAgents(): Promise<AgentsEntity[]> {
    return this.intermediaryService.findAllAgents();
  }

  @Post('agent')
  async createAgent(
    @Body() agentDto: AgentsDto,
  ): Promise<AgentsDto & AgentsEntity> {
    return this.intermediaryService.createAgent(agentDto);
  }

  @Put('agent/:id')
  async updateAgent(
    @Param('id') id: string,
    @Body() agentsDto: AgentsDto,
  ): Promise<AgentsDto & AgentsEntity> {
    return this.intermediaryService.updateAgent(id, agentsDto);
  }

  /**
   * this is the section for individual clients
   */
  @Get('broker/:id')
  async findOneBroker(@Param('id') id: string): Promise<BrokerEntity> {
    return this.intermediaryService.findOneBroker(id);
  }

  @Get('broker')
  async findBroker(): Promise<BrokerEntity[]> {
    return this.intermediaryService.findAllBrokers();
  }

  @Post('broker')
  async createBroker(
    @Body() brokersDto: BrokersDto,
  ): Promise<BrokersDto & BrokerEntity> {
    return this.intermediaryService.createBroker(brokersDto);
  }

  @Put('broker/:id')
  async updateBroker(
    @Param('id') id: string,
    @Body() BrokersDto: BrokersDto,
  ): Promise<BrokersDto & BrokerEntity> {
    return this.intermediaryService.updateBroker(id, BrokersDto);
  }

  /**
   * this is the section for individual clients
   *
   */
  @Get('sales-presentative/:id')
  async findOneSalesRepresentative(
    @Param('id') id: string,
  ): Promise<SalesRepresentativeEntity> {
    return this.intermediaryService.findOneSalesRepresentative(id);
  }

  @Get('sales-representative')
  async findSalesRepresentative(): Promise<SalesRepresentativeEntity[]> {
    return this.intermediaryService.findAllSalesRepresentatives();
  }

  @Post('sales-representative')
  async createSalesRepresentative(
    @Body() salesRepresentativeDto: SalesRepresentativesDto,
  ): Promise<SalesRepresentativesDto & SalesRepresentativeEntity> {
    return this.intermediaryService.createSalesRepresentative(
      salesRepresentativeDto,
    );
  }

  @Put('sales-representativ/:id')
  async updateSalesRepresentative(
    @Param('id') id: string,
    @Body() salesRepresentativeDto: SalesRepresentativesDto,
  ): Promise<SalesRepresentativesDto & SalesRepresentativeEntity> {
    return this.intermediaryService.updateSalesRepresentative(
      id,
      salesRepresentativeDto,
    );
  }
}
