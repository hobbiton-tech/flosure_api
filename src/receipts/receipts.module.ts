import { Module } from '@nestjs/common';
import { ReceiptController } from './receipt.controller';
import { ReceiptService } from './receipt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceiptEntity } from './entities/receipt.entity';
import { ReceipEntityRepository } from './repositories/receipt.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ReceiptEntity, ReceipEntityRepository])],
  controllers: [ReceiptController],
  providers: [ReceiptService],
})
export class ReceiptsModule {}
