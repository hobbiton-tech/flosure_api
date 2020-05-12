import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReceipEntityRepository } from './repositories/receipt.repository';
import { ReceiptEntity } from './entities/receipt.entity';
import { ReceiptDto } from './dtos/receipt.dto';

@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(ReceiptEntity)
    private readonly receiptEntityRepository: ReceipEntityRepository,
  ) {}

  async findAllReceipts(): Promise<ReceiptEntity[]> {
    return this.receiptEntityRepository.find({});
  }

  async createReceipt(
    receiptDto: ReceiptDto,
  ): Promise<ReceiptDto & ReceiptEntity> {
    return this.receiptEntityRepository.save(receiptDto);
  }

  async findOneReceipt(id: string): Promise<ReceiptEntity> {
    return this.receiptEntityRepository.findOneOrFail(id);
  }

  async updateReceipt(
    id: string,
    receiptDto: ReceiptDto,
  ): Promise<ReceiptDto & ReceiptEntity> {
    return this.receiptEntityRepository.save({ ...receiptDto, id: id });
  }
}
