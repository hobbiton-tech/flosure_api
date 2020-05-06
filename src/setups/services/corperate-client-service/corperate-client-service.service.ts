import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientsDto } from '../../dtos/clients.dto';
import { CorperateClientEntity } from '../../entities/corperate-clients.entity';
import { CorperateClientEntityRepository } from 'src/setups/repositories/corperate-client.repository';

@Injectable()
export class CorperateClientService {
  constructor(
    @InjectRepository(CorperateClientEntity)
    private readonly corperateClientsRepository: CorperateClientEntityRepository,
  ) {}

  findAll = async () => {
    return this.corperateClientsRepository.find({});
  };

  createClient = async (clientDto: ClientsDto) => {
    return this.corperateClientsRepository.save(clientDto);
  };

  findOneClient = async (id: string) => {
    return this.corperateClientsRepository.findOneOrFail(id);
  };

  updateClient = async (id: string, clientDto: ClientsDto) => {
    return this.corperateClientsRepository.save({ ...clientDto, id: id });
  };

  removeClient = async (id: string) => {
    await this.corperateClientsRepository.findOneOrFail(id);
    return this.corperateClientsRepository.delete(id);
  };
}
