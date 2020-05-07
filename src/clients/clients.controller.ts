import {
  Controller,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Get,
} from '@nestjs/common';
import { individualClientsDto } from '../setups/dtos/individual-client.dto';
import { corporateClientsDto } from '../setups/dtos/corporate-client.dto';
import { ClientService } from './clients.service';
import { CorporateClientEntity } from 'src/setups/entities/corporate-clients.entity';
import { IndividualClientEntityRepository } from 'src/setups/repositories/individual-client.repository';
import { IndividualClientEntity } from 'src/setups/entities/individual-clients.entity';

/**
 * This is the Cephas
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
    @Body() corporateClientsDto: corporateClientsDto,
  ): Promise<corporateClientsDto & CorporateClientEntity> {
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
    @Body() corporateClientsDto: corporateClientsDto,
  ): Promise<corporateClientsDto & CorporateClientEntity> {
    return this.clientsService.updateCorporateClient(id, corporateClientsDto);
  }

  @Get('individual')
  async findAllIndividualClients(): Promise<IndividualClientEntity[]> {
    return this.clientsService.findAllIndividualClients();
  }

  @Post('individual')
  async createIndividualClient(
    @Body() individualClientsDto: individualClientsDto,
  ): Promise<individualClientsDto & IndividualClientEntity> {
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
    @Body() individualClientsDto: individualClientsDto,
  ): Promise<individualClientsDto & IndividualClientEntity> {
    return this.clientsService.updateIndividualClient(id, individualClientsDto);
  }
}
