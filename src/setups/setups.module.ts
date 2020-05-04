import { Module } from '@nestjs/common';
import { ClassService } from './services/class/class.service';
import { ProductService } from './services/product/product.service';
import { CoverTypeService } from './services/cover-type/cover-type.service';
import { PerilService } from './services/peril/peril.service';
import { ClassController } from './controllers/class/class.controller';
import { ProductController } from './controllers/product/product.controller';
import { CoverTypeController } from './controllers/cover-type/cover-type.controller';
import { PerilController } from './controllers/peril/peril.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from './entities/class.entity';
import { Product } from './entities/product.entity';
import { ProductRepository } from './repositories/product.repository';
import { ClassRepository } from './repositories/class.repository';
import { CommissionSetupsController } from './controllers/commission-setups/commission-setups.controller';
import { CommissionSetupsService } from './services/commission-setups/commission-setups.service';
import { CommissionSetupRepository } from './repositories/commission-setup.repository';
import { CommissionSetup } from './entities/commission-setup.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Class,
      Product,
      CommissionSetup,
      ProductRepository,
      ClassRepository,
      CommissionSetupRepository,
    ]),
  ],
  providers: [
    ClassService,
    ProductService,
    CoverTypeService,
    PerilService,
    CommissionSetupsService,
  ],
  controllers: [
    ClassController,
    ProductController,
    CoverTypeController,
    PerilController,
    CommissionSetupsController,
  ],
})
export class SetupsModule {}
