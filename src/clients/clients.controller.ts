import { Controller, Post, Body, Param, Put, Get } from '@nestjs/common';
import { ClientService } from './clients.service';
import { CorporateClientEntity } from './entities/corporate-clients.entity';
import { IndividualClientEntity } from './entities/individual-clients.entity';
import { CorporateClientsDto } from './dtos/corporate-client.dto';
import { IndividualClientsDto } from './dtos/individual-client.dto';


/**
 * This is the Cephas
 */

/**
 * this is the section for corperate clients
 */
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientService) {}

  @Get('corporate')
  async getAllCorporateClients(): Promise<CorporateClientEntity[]> {
    return this.clientsService.findAllCorporateClients();
  }

  @Post('corporate')
  async createCorporateClient(
    @Body() corporateClientsDto: CorporateClientsDto,
  ): Promise<CorporateClientsDto & CorporateClientEntity> {
    return this.clientsService.createCorporateClient(corporateClientsDto);
  }

  @Get('corporate/:id')
  async findOneCorporate(
    @Param('id') id: string,
  ): Promise<CorporateClientEntity> {
    return this.clientsService.findOneCorporateClient(id);
  }

  @Put('corporate/:id')
  async updateCorporateClient(
    @Param('id') id: string,
    @Body() corporateClientsDto: CorporateClientsDto,
  ): Promise<CorporateClientsDto & CorporateClientEntity> {
    return this.clientsService.updateCorporateClient(id, corporateClientsDto);
  }

  /**
   * this is the section for individual clients
   */

  @Get('individual')
  async findAllIndividualClients(): Promise<IndividualClientEntity[]> {
    return this.clientsService.findAllIndividualClients();
  }

  @Post('individual')
  async createIndividualClient(
    @Body() individualClientsDto: IndividualClientsDto,
  ): Promise<IndividualClientsDto & IndividualClientEntity> {
    return this.clientsService.createIndividualClient(individualClientsDto);
  }

  @Get('individual/:id')
  async findOneIndividualClient(
    @Param('id') id: string,
  ): Promise<IndividualClientEntity> {
    return this.clientsService.findOneIndividualClient(id);
  }

  @Put('individual/:id')
  async updateIndividualClient(
    @Param('id') id: string,
    @Body() individualClientsDto: IndividualClientsDto,
  ): Promise<IndividualClientsDto & IndividualClientEntity> {
    return this.clientsService.updateIndividualClient(id, individualClientsDto);
  }
}
