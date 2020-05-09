import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EndorsementDto } from '../../dtos/endorsement.dto';
import { Endorsement } from '../../entities/endorsement.entity';
import { EndorsementRepository } from '../../repositories/endorsement.repository';

@Injectable()
export class EndorsementService {
  constructor(
    @InjectRepository(Endorsement)
    private readonly endorsementRepository: EndorsementRepository,
  ) {}

  findAll = async () => {
    return this.endorsementRepository.find({
      relations: ['policies'],
    });
  };

  createEndorsement = async (endorsementDto: EndorsementDto) => {
    return this.endorsementRepository.save(endorsementDto);
  };

  findOneEndorsement = async (id: string) => {
    return this.endorsementRepository.findOneOrFail(id);
  };

  updateEndorsement = async (id: string, endorsementDto: EndorsementDto) => {
    return this.endorsementRepository.save({ ...endorsementDto, id: id });
  };
}
