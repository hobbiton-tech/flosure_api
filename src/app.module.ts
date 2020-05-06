import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SetupsModule } from './setups/setups.module';
import { Class } from 'src/setups/entities/class.entity';
import { CorperateClientEntity } from 'src/setups/entities/corperate-clients.entity';
import { IndividualClientEntity } from 'src/setups/entities/individual-clients.entity';
import { Product } from 'src/setups/entities/product.entity';
import { CommissionSetup } from './setups/entities/commission-setup.entity';

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
      // entities: [Class, Product, CommissionSetup],
      // synchronize: true,
      // autoLoadEntities: true,

      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'postgres',
      entities: [
        Class,
        Product,
        CommissionSetup,
        CorperateClientEntity,
        IndividualClientEntity,
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    SetupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
