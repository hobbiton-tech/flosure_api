import { Module } from '@nestjs/common';
import { EndorsementController } from './controllers/endorsement/endorsement.controller';
import { EndorsementService } from './services/endorsement/endorsement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endorsement } from './entities/endorsement.entity';
import { EndorsementRepository } from './repositories/endorsement.repository';
import { PolicyRepository } from 'src/policies/repositories/policy.repository';
import { Policy } from 'src/policies/entities/policy.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Endorsement,
      EndorsementRepository,
      PolicyRepository,
      Policy,
    ]),
  ],
  controllers: [EndorsementController],
  providers: [EndorsementService],
})
export class EndorsementsModule {}
