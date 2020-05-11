import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Risk } from './entities/risk.entity';
import { Discount } from './entities/discount.entity';
import { Load } from './entities/load.entity';
import { RiskRepository } from './repositories/risk.repository';
import { RiskController } from './risk.controller';
import { RiskService } from './risk.service';

@Module({
  imports: [TypeOrmModule.forFeature([Risk, Load, Discount, RiskRepository])],
  controllers: [RiskController],
  providers: [RiskService],
})
export class RisksModule {}
