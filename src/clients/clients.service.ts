import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CorporateClientEntity } from 'src/setups/entities/corporate-clients.entity';
import { IndividualClientEntity } from 'src/setups/entities/individual-clients.entity';
import {} from 'typeorm';
import { individualClientsDto } from '../setups/dtos/individual-client.dto';
import { corporateClientsDto } from '../setups/dtos/corporate-client.dto';
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

  async createCorporateClient(
    corporateClientsDto: corporateClientsDto,
  ): Promise<corporateClientsDto & CorporateClientEntity> {
    return this.corporateClientsRepository.save(corporateClientsDto);
  }

  findOneCorporateClient = async (id: string) => {
    return this.corporateClientsRepository.findOneOrFail(id);
  };

  updateCorporateClient = async (
    id: string,
    corporateClientsDto: corporateClientsDto,
  ) => {
    return this.corporateClientsRepository.save({
      ...corporateClientsDto,
      id: id,
    });
  };

  /**
   * This is section is for individual clients.
   */

  findAllIndividualClients = async () => {
    return this.individualClientsRepository.find({});
  };

  createIndividualClient = async (
    individualClientsDto: individualClientsDto,
  ) => {
    return this.individualClientsRepository.save(individualClientsDto);
  };

  findOneIndividualClient = async (id: string) => {
    return this.individualClientsRepository.findOneOrFail(id);
  };

  updateIndividualClient = async (
    id: string,
    individualClientsDto: individualClientsDto,
  ) => {
    return this.individualClientsRepository.save({
      ...individualClientsDto,
      id: id,
    });
  };
}
