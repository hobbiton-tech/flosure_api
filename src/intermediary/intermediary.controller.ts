import { Controller, Post, Body, Param, Put, Get } from '@nestjs/common';
import { IntermediaryService } from './intermediary.service';
import { AgentsEntity } from './entities/agents.entity';
import { BrokerEntity } from './entities/broker.entity';
import { BrokersDto } from './dtos/brokers.dto';
import { AgentsDto } from './dtos/agents.dto';
import { SalesRepresentativesDto } from './dtos/sales-representatives.dto';
import { SalesRepresentativeEntity } from './entities/sales-representative.entity';

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
  @Get('sales-representative/:id')
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

  @Put('sales-representative/:id')
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
