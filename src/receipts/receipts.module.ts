import { Module } from '@nestjs/common';
import { ReceiptController } from './controllers/receipt/receipt.controller';
import { ReceiptService } from './services/receipt/receipt.service';

@Module({
  controllers: [ReceiptController],
  providers: [ReceiptService]
})
export class ReceiptsModule {}
