import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SetupsModule } from './setups/setups.module';
import { Class } from 'src/setups/entities/class.entity';
import { Product } from 'src/setups/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'joshua1234',
      database: 'class',
      entities: [Class, Product],
      synchronize: true,
      autoLoadEntities: true,
    }),
    SetupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
