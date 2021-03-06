import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SetupsModule } from './setups/setups.module';
import { ProductClass } from 'src/setups/entities/class.entity';
import { Product } from 'src/setups/entities/product.entity';
import { CommissionSetup } from './setups/entities/commission-setup.entity';
import { EndorsementsModule } from './endorsements/endorsements.module';
import { PoliciesModule } from './policies/policies.module';
import { RisksModule } from './risks/risks.module';
import { ClientsModule } from './clients/clients.module';
import { IntermediaryModule } from './intermediary/intermediary.module';
import { UsersModule } from './users/users.module';
import { QuotationsModule } from './quotations/quotations.module';
import { PaymentsModule } from './payments/payments.module';
import { DocumentsModule } from './documents/documents.module';
import { DebitNote } from './documents/entities/debit-note.entity';
import { CreditNote } from './documents/entities/credit-note.entity';
import { CoverNote } from './documents/entities/cover-note.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: 'ec2-52-73-247-67.compute-1.amazonaws.com',
      // port: 5432,
      // username: 'qppyocwdpbilrq',
      // password:
      //   '831626c55d6f55a3d431280f046d0685000a844f54d24276647614dc999be92d',
      // database: 'depqp2jclcrgp3',
      // entities: [
      //   ProductClass,
      //   Product,
      //   CommissionSetup,
      //   DebitNote,
      //   CreditNote,
      //   CoverNote,
      // ],
      // synchronize: true,
      // autoLoadEntities: true,
      // logging: true,

      type: 'postgres',
      host: '104.248.247.78',
      port: 5432,
      username: 'flosuredb',
      password: '@1h0bb170n',
      database: 'flosure_aplus',
      entities: [
        ProductClass,
        Product,
        CommissionSetup,
        DebitNote,
        CreditNote,
        CoverNote,
      ],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,

      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'postgres',
      // password: 'joshua1234',
      // database: 'postgres',
      // entities: [
      //   ProductClass,
      //   Product,
      //   CommissionSetup,
      //   DebitNote,
      //   CreditNote,
      //   CoverNote,
      // ],
      // synchronize: true,
      // autoLoadEntities: true,
      // logging: true,
    }),
    SetupsModule,
    EndorsementsModule,
    PoliciesModule,
    RisksModule,
    ClientsModule,
    UsersModule,
    IntermediaryModule,
    QuotationsModule,

    PaymentsModule,

    DocumentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
