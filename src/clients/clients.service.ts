import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CorperateClientEntity } from 'src/setups/entities/corperate-clients.entity';
import { IndividualClientEntity } from 'src/setups/entities/individual-clients.entity';
import {} from 'typeorm';
import { ClientsDto } from '../setups/dtos/clients.dto';
import { CorperateClientEntityRepository } from '../setups/repositories/corperate-client.repository';
import { IndividualClientEntityRepository } from '../setups/repositories/individual-client.repository';

//
//
//
//Injector for corperate client
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
//
//
//
//Injector for individual client
Injectable();
export class IndividualClientService {
  constructor(
    @InjectRepository(IndividualClientEntity)
    private readonly individualClientsRepository: IndividualClientEntityRepository,
  ) {}

  findAll = async () => {
    return this.individualClientsRepository.find({});
  };

  createClient = async (clientDto: ClientsDto) => {
    return this.individualClientsRepository.save(clientDto);
  };

  findOneClient = async (id: string) => {
    return this.individualClientsRepository.findOneOrFail(id);
  };

  updateClient = async (id: string, clientDto: ClientsDto) => {
    return this.individualClientsRepository.save({ ...clientDto, id: id });
  };

  removeClient = async (id: string) => {
    await this.individualClientsRepository.findOneOrFail(id);
    return this.individualClientsRepository.delete(id);
  };
}
