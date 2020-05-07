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
import {
  CorperateClientService,
  IndividualClientService,
} from './clients.service';

//
//
//
//individual clients endpoints
@Controller('clients')
export class CorperateClientsController {
  constructor(
    private readonly corperateClientService: CorperateClientService,
  ) {}

  @Get('corperate')
  getAllClients() {
    return this.corperateClientService.findAll();
  }

  @Post('corperate')
  createClient(@Body() clientDto: ClientsDto) {
    return this.corperateClientService.createClient(clientDto);
  }

  @Get('corperate/:id')
  getOneClient(@Param('id') id: string) {
    return this.corperateClientService.findOneClient(id);
  }

  @Put('corperate/:id')
  updateClient(@Param('id') id: string, @Body() clientDto: ClientsDto) {
    return this.corperateClientService.updateClient(id, clientDto);
  }

  @Delete('corperate/:id')
  deleteClient(@Param('id') id: string) {
    return this.corperateClientService.removeClient(id);
  }
}

//
//
//
//individual clients endpoint
@Controller('clients')
export class IndividualClientsController {
  constructor(
    private readonly individualClientService: IndividualClientService,
  ) {}

  @Get('individual')
  getAllClients() {
    return this.individualClientService.findAll();
  }

  @Post('individual')
  createClient(@Body() clientDto: ClientsDto) {
    return this.individualClientService.createClient(clientDto);
  }

  @Get('individual/:id')
  getOneClient(@Param('id') id: string) {
    return this.individualClientService.findOneClient(id);
  }

  @Put('individual/:id')
  updateClient(@Param('id') id: string, @Body() clientDto: ClientsDto) {
    return this.individualClientService.updateClient(id, clientDto);
  }

  @Delete('individual/:id')
  deleteClient(@Param('id') id: string) {
    return this.individualClientService.removeClient(id);
  }
}
