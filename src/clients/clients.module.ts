import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CorperateClientsController,
  IndividualClientsController,
} from './clients.controller';
import {
  CorperateClientService,
  IndividualClientService,
} from './clients.service';
import { IndividualClientEntityRepository } from 'src/setups/repositories/individual-client.repository';
import { CorperateClientEntityRepository } from 'src/setups/repositories/corperate-client.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CorperateClientEntityRepository,
      IndividualClientEntityRepository,
    ]),
  ],

  controllers: [CorperateClientsController, IndividualClientsController],
  providers: [CorperateClientService, IndividualClientService],
})
export class ClientsModule {}
