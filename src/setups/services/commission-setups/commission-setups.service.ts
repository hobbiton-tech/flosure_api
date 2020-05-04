import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommissionSetupDto } from '../../dtos/commission-setup.dto';
import { CommissionSetup } from '../../entities/commission-setup.entity';
import { CommissionSetupRepository } from '../../repositories/commission-setup.repository';

@Injectable()
export class CommissionSetupsService {
  constructor(
    @InjectRepository(CommissionSetup)
    private readonly commissionSetupRepository: CommissionSetupRepository,
  ) {}

  findAll = async () => {
    return this.commissionSetupRepository.find();
  };

  createCommissionSetup = async (commissionSetupDto: CommissionSetupDto) => {
    return this.commissionSetupRepository.save(commissionSetupDto);
  };

  findOneCommissionSetup = async (id: string) => {
    return this.commissionSetupRepository.findOneOrFail(id);
  };

  updateCommissionSetupRepository = async (
    id: string,
    commissionSetupDto: CommissionSetupDto,
  ) => {
    return this.commissionSetupRepository.save({
      ...commissionSetupDto,
      id: id,
    });
  };

  removeCommissionSetupRepository = async (id: string) => {
    await this.commissionSetupRepository.findOneOrFail(id);
    return this.commissionSetupRepository.delete(id);
  };
}
