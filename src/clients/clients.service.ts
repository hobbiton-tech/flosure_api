import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CorporateClientEntity } from './entities/corporate-clients.entity';
import { CorporateClientEntityRepository } from './repositories/corporate-client.repository';
import { IndividualClientEntity } from './entities/individual-clients.entity';
import { IndividualClientEntityRepository } from './repositories/individual-client.repository';
import { CorporateClientsDto } from './dtos/corporate-client.dto';
import { IndividualClientsDto } from './dtos/individual-client.dto';


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
    corporateClientsDto: CorporateClientsDto,
  ): Promise<CorporateClientsDto & CorporateClientEntity> {
    return this.corporateClientsRepository.save(corporateClientsDto);
  }

  async findOneCorporateClient(id: string): Promise<CorporateClientEntity> {
    return this.corporateClientsRepository.findOneOrFail(id);
  }

  async updateCorporateClient(
    id: string,
    corporateClientsDto: CorporateClientsDto,
  ): Promise<CorporateClientsDto & CorporateClientEntity> {
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
    individualClientsDto: IndividualClientsDto,
  ): Promise<IndividualClientsDto & IndividualClientEntity> {
    return this.individualClientsRepository.save(individualClientsDto);
  }

  async findOneIndividualClient(id: string): Promise<IndividualClientEntity> {
    return this.individualClientsRepository.findOneOrFail(id);
  }

  async updateIndividualClient(
    id: string,
    individualClientsDto: IndividualClientsDto,
  ): Promise<IndividualClientsDto & IndividualClientEntity> {
    return this.individualClientsRepository.save({
      ...individualClientsDto,
      id: id,
    });
  }
}
//********************************************************************* ©cephas**********************************************************************
