import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { EndorsementDto } from '../../dtos/endorsement.dto';
import { Endorsement } from '../../entities/endorsement.entity';
import { EndorsementRepository } from '../../repositories/endorsement.repository';
import { PolicyRepository } from 'src/policies/repositories/policy.repository';

@Injectable()
export class EndorsementService {
  constructor(
    @InjectRepository(Endorsement)
    private readonly endorsementRepository: EndorsementRepository,
    private readonly policyRepository: PolicyRepository,
  ) {}

  findAll = async () => {
    return this.endorsementRepository.find({
      relations: ['policy'],
    });
  };

  createEndorsement = async (id: string, endorsementDto: EndorsementDto) => {
    const policyEntity = await this.policyRepository.findOne({
      where: {
        id: Equal(id),
      },
      relations: ['endorsements'],
    });

    if (!policyEntity) {
      throw new HttpException('Policy not found', HttpStatus.NOT_FOUND);
    }

    let endorsement = new Endorsement();
    endorsement.dateCreated = endorsementDto.dateCreated;
    endorsement.effectDate = endorsementDto.dateCreated;
    endorsement.dateUpdated = endorsementDto.dateCreated;
    endorsement.remark = endorsementDto.remark;
    endorsement.status = endorsementDto.status;
    endorsement.type = endorsementDto.type;
    endorsement.policy = policyEntity;

    await this.endorsementRepository.save(endorsement);
    policyEntity.endorsements.push(endorsement);
    await this.policyRepository.save(policyEntity);
  };

  findOneEndorsement = async (id: string) => {
    return this.endorsementRepository.findOneOrFail(id, {relations: ['policy']});
  };

  updateEndorsement = async (id: string, endorsementDto: EndorsementDto) => {
    return this.endorsementRepository.save({ ...endorsementDto, id: id });
  };
}
