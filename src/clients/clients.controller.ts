import {
  Controller,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Get,
} from '@nestjs/common';
import { ClientsDto } from '../setups/dtos/clients.dto';
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
  createCorporateClient(@Body() clientDto: ClientsDto) {
    return this.clientsService.createCorporateClient(clientDto);
  }

  @Get('corporate/:id')
  findOneCorporate(@Param('id') id: string) {
    return this.clientsService.findOneCorporateClient(id);
  }

  @Put('corporate/:id')
  updateCorporateClient(
    @Param('id') id: string,
    @Body() clientDto: ClientsDto,
  ) {
    return this.clientsService.updateCorporateClient(id, clientDto);
  }

  @Get('individual')
  findAllIndividualClients() {
    return this.clientsService.findAllIndividualClients();
  }

  @Post('individual')
  createIndividualClient(@Body() clientDto: ClientsDto) {
    return this.clientsService.createIndividualClient(clientDto);
  }

  @Get('individual/:id')
  findOneIndividualClient(@Param('id') id: string) {
    return this.clientsService.findOneIndividualClient(id);
  }

  @Put('individual/:id')
  updateIndividualClient(
    @Param('id') id: string,
    @Body() clientDto: ClientsDto,
  ) {
    return this.clientsService.updateIndividualClient(id, clientDto);
  }
}
