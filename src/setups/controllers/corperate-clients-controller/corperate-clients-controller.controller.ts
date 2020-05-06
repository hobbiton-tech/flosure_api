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
import { CorperateClientService } from '../../services/corperate-client-service/corperate-client-service.service';

@Controller('corperate-clients-controller')
export class CorperateClientsController {
  constructor(
    private readonly corperateClientService: CorperateClientService,
  ) {}

  @Get()
  getAllClients() {
    return this.corperateClientService.findAll();
  }

  @Post()
  createClient(@Body() clientDto: ClientsDto) {
    return this.corperateClientService.createClient(clientDto);
  }

  @Get(':id')
  getOneClient(@Param('id') id: string) {
    return this.corperateClientService.findOneClient(id);
  }

  @Put(':id')
  updateClient(@Param('id') id: string, @Body() clientDto: ClientsDto) {
    return this.corperateClientService.updateClient(id, clientDto);
  }

  @Delete(':id')
  deleteClient(@Param('id') id: string) {
    return this.corperateClientService.removeClient(id);
  }
}
