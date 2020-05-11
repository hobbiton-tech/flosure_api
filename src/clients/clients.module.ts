import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { ClientService } from './clients.service';
import { CorporateClientEntity } from './entities/corporate-clients.entity';
import { IndividualClientEntity } from './entities/individual-clients.entity';
import { CorporateClientEntityRepository } from './repositories/corporate-client.repository';
import { IndividualClientEntityRepository } from './repositories/individual-client.repository';

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
