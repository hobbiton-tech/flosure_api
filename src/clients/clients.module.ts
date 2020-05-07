import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { ClientService } from './clients.service';
import { IndividualClientEntityRepository } from 'src/setups/repositories/individual-client.repository';
import { CorporateClientEntityRepository } from 'src/setups/repositories/corporate-client.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CorporateClientEntityRepository,
      IndividualClientEntityRepository,
    ]),
  ],

  controllers: [ClientsController],
  providers: [ClientService],
})
export class ClientsModule {}
