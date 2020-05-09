import { Module } from '@nestjs/common';
import { RiskController } from './controllers/risk/risk.controller';
import { RiskService } from './services/risk/risk.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Risk } from './entities/risk.entity';
import { Discount } from './entities/discount.entity';
import { Load } from './entities/load.entity';
import { RiskRepository } from './repositories/risk.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Risk, Load, Discount, RiskRepository])],
  controllers: [RiskController],
  providers: [RiskService],
})
export class RisksModule {}
