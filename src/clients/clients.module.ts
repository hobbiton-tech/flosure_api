import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { ClientService } from './clients.service';
import { IndividualClientEntityRepository } from 'src/setups/repositories/individual-client.repository';
import { CorporateClientEntityRepository } from 'src/setups/repositories/corporate-client.repository';
import { IndividualClientEntity } from 'src/setups/entities/individual-clients.entity';
import { CorporateClientEntity } from 'src/setups/entities/corporate-clients.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CorporateClientEntity,
      IndividualClientEntity,
      CorporateClientEntityRepository,
      IndividualClientEntityRepository,
    ]),
  ],

  controllers: [ClientsController],
  providers: [ClientService],
})
export class ClientsModule {}
