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

/**
 * This is the Cephas
 */
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientService) {}

  @Get('corporate')
  getAllCorporateClients(): Promise<CorporateClientEntity[]> {
    return this.clientsService.findAllCorporateClients();
  }

  @Post('corporate')
  createCorporateClient(@Body() corporateClientsDto: corporateClientsDto) {
    return this.clientsService.createCorporateClient(corporateClientsDto);
  }

  @Get('corporate/:id')
  findOneCorporate(@Param('id') id: string) {
    return this.clientsService.findOneCorporateClient(id);
  }

  @Put('corporate/:id')
  updateCorporateClient(
    @Param('id') id: string,
    @Body() corporateClientsDto: corporateClientsDto,
  ) {
    return this.clientsService.updateCorporateClient(id, corporateClientsDto);
  }

  @Get('individual')
  findAllIndividualClients() {
    return this.clientsService.findAllIndividualClients();
  }

  @Post('individual')
  createIndividualClient(@Body() individualClientsDto: individualClientsDto) {
    return this.clientsService.createIndividualClient(individualClientsDto);
  }

  @Get('individual/:id')
  findOneIndividualClient(@Param('id') id: string) {
    return this.clientsService.findOneIndividualClient(id);
  }

  @Put('individual/:id')
  updateIndividualClient(
    @Param('id') id: string,
    @Body() individualClientsDto: individualClientsDto,
  ) {
    return this.clientsService.updateIndividualClient(id, individualClientsDto);
  }
}
