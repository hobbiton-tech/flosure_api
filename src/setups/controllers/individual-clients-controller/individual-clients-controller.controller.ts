import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ClientsDto } from '../../dtos/clients.dto';
import { IndividualClientService } from '../../services/individual-client-service/individual-client-service.service';

@Controller('individual-clients-controller')
export class IndividualClientsController {
  constructor(
    private readonly individualClientService: IndividualClientService,
  ) {}

  @Get()
  getAllClients() {
    return this.individualClientService.findAll();
  }

  @Post()
  createClient(@Body() clientDto: ClientsDto) {
    return this.individualClientService.createClient(clientDto);
  }

  @Get(':id')
  getOneClient(@Param('id') id: string) {
    return this.individualClientService.findOneClient(id);
  }

  @Put(':id')
  updateClient(@Param('id') id: string, @Body() clientDto: ClientsDto) {
    return this.individualClientService.updateClient(id, clientDto);
  }

  @Delete(':id')
  deleteClient(@Param('id') id: string) {
    return this.individualClientService.removeClient(id);
  }
}
