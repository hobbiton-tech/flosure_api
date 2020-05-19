import { Installments } from '../entities/installments.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstallmentEntityRepository } from '../repositories/installments.repository';
import { InstallmentsDto } from '../dtos/installments.dto';

@Injectable()
export class InstallmentsService {
  constructor(
    @InjectRepository(Installments)
    private readonly installmentEntityRepository: InstallmentEntityRepository,
  ) {}

  async findAllInstallments(): Promise<Installments[]> {
    return this.installmentEntityRepository.find({});
  }

  async createInstallment(
    installmentsDto: InstallmentsDto,
  ): Promise<InstallmentsDto & Installments> {
    return this.installmentEntityRepository.save(installmentsDto);
  }

  async findOneInstallment(id: string): Promise<Installments> {
    return this.installmentEntityRepository.findOneOrFail(id);
  }

  async updateInstallment(
    id: string,
    installmentsDto: InstallmentsDto,
  ): Promise<InstallmentsDto & Installments> {
    return this.installmentEntityRepository.save({
      ...installmentsDto,
      id: id,
    });
  }
}
