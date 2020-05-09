import { Module } from '@nestjs/common';
import { EndorsementController } from './controllers/endorsement/endorsement.controller';
import { EndorsementService } from './services/endorsement/endorsement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endorsement } from './entities/endorsement.entity';
import { EndorsementRepository } from './repositories/endorsement.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Endorsement, EndorsementRepository])],
  controllers: [EndorsementController],
  providers: [EndorsementService],
})
export class EndorsementsModule {}
