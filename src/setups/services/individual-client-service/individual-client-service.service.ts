import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientsDto } from '../../dtos/clients.dto';
import { IndividualClientEntity } from '../../entities/individual-clients.entity';
import { IndividualClientEntityRepository } from 'src/setups/repositories/individual-client.repository';
@Injectable()
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
