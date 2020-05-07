import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CorporateClientEntity } from 'src/setups/entities/corporate-clients.entity';
import { IndividualClientEntity } from 'src/setups/entities/individual-clients.entity';
import {} from 'typeorm';
import { ClientsDto } from '../setups/dtos/clients.dto';
import { CorporateClientEntityRepository } from '../setups/repositories/corporate-client.repository';
import { IndividualClientEntityRepository } from '../setups/repositories/individual-client.repository';

/**
 * This is Cephas's code. Don't modify.
 */
@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(CorporateClientEntity)
    private readonly corporateClientsRepository: CorporateClientEntityRepository,
    @InjectRepository(IndividualClientEntity)
    private readonly individualClientsRepository: IndividualClientEntityRepository,
  ) {}

  async findAllCorporateClients(): Promise<CorporateClientEntity[]> {
    return this.corporateClientsRepository.find({});
  }

  createCorporateClient = async (clientDto: ClientsDto) => {
    return this.corporateClientsRepository.save(clientDto);
  };

  findOneCorporateClient = async (id: string) => {
    return this.corporateClientsRepository.findOneOrFail(id);
  };

  updateCorporateClient = async (id: string, clientDto: ClientsDto) => {
    return this.corporateClientsRepository.save({ ...clientDto, id: id });
  };

  findAllIndividualClients = async () => {
    return this.individualClientsRepository.find({});
  };

  createIndividualClient = async (clientDto: ClientsDto) => {
    return this.individualClientsRepository.save(clientDto);
  };

  findOneIndividualClient = async (id: string) => {
    return this.individualClientsRepository.findOneOrFail(id);
  };

  updateIndividualClient = async (id: string, clientDto: ClientsDto) => {
    return this.individualClientsRepository.save({ ...clientDto, id: id });
  };
}
