import { Module } from '@nestjs/common';
import { PolicyService } from './services/policy/policy.service';
import { Policy } from './entities/policy.entity';
import { PolicyBackUp } from './entities/policy-backup.entity';
import {
  PolicyRepository,
  PolicyBackUpRepository,
} from './repositories/policy.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiskRepository } from 'src/risks/repositories/risk.repository';
import { PolicyController } from './policy.controller';
import { Endorsement } from 'src/endorsements/entities/endorsement.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Policy,
      PolicyBackUp,
      PolicyRepository,
      PolicyBackUpRepository,
      RiskRepository,
      Endorsement,
    ]),
  ],
  providers: [PolicyService],
  controllers: [PolicyController],
})
export class PoliciesModule {}
