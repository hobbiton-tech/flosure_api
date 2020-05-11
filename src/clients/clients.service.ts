import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CorporateClientEntity } from 'src/setups/entities/corporate-clients.entity';
import { IndividualClientEntity } from 'src/setups/entities/individual-clients.entity';
import { individualClientsDto } from '../setups/dtos/individual-client.dto';
import { corporateClientsDto } from '../setups/dtos/corporate-client.dto';
import { CorporateClientEntityRepository } from '../setups/repositories/corporate-client.repository';
import { IndividualClientEntityRepository } from '../setups/repositories/individual-client.repository';

/**
 * This is section is for corporate clients.
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

  async findOneCorporateClient(id: string): Promise<CorporateClientEntity> {
    return this.corporateClientsRepository.findOneOrFail(id);
  }

  async updateCorporateClient(
    id: string,
    corporateClientsDto: corporateClientsDto,
  ): Promise<corporateClientsDto & CorporateClientEntity> {
    return this.corporateClientsRepository.save({
      ...corporateClientsDto,
      id: id,
    });
  }

  /**
   * This is section is for individual clients.
   */

  async findAllIndividualClients(): Promise<IndividualClientEntity[]> {
    return this.individualClientsRepository.find({});
  }

  async createIndividualClient(
    individualClientsDto: individualClientsDto,
  ): Promise<individualClientsDto & IndividualClientEntity> {
    return this.individualClientsRepository.save(individualClientsDto);
  }

  async findOneIndividualClient(id: string): Promise<IndividualClientEntity> {
    return this.individualClientsRepository.findOneOrFail(id);
  }

  async updateIndividualClient(
    id: string,
    individualClientsDto: individualClientsDto,
  ): Promise<individualClientsDto & IndividualClientEntity> {
    return this.individualClientsRepository.save({
      ...individualClientsDto,
      id: id,
    });
  }
}
//********************************************************************* ©cephas**********************************************************************
