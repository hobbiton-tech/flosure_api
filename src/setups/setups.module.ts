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
import { CorporateClientEntityRepository } from './repositories/corporate-client.repository';
import { IndividualClientEntityRepository } from './repositories/individual-client.repository';
import { CommissionSetup } from './entities/commission-setup.entity';

// import { CorperateClientsController } from './controllers/corperate-clients-controller/corperate-clients-controller.controller';
// import { IndividualClientsController } from './controllers/individual-clients-controller/individual-clients-controller.controller';
// import { IndividualClientService } from './services/individual-client-service/individual-client-service.service';
// import { CorperateClientService } from './services/corperate-client-service/corperate-client-service.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Class,
      Product,
      CommissionSetup,
      ProductRepository,
      ClassRepository,
      CommissionSetupRepository,
      CorporateClientEntityRepository,
      IndividualClientEntityRepository,
    ]),
  ],
  providers: [
    ClassService,
    ProductService,
    CoverTypeService,
    PerilService,
    CommissionSetupsService,
    // IndividualClientService,
    // CorperateClientService,
  ],
  controllers: [
    ClassController,
    ProductController,
    CoverTypeController,
    PerilController,
    CommissionSetupsController,
    // CorperateClientsController,
    // IndividualClientsController,
  ],
})
export class SetupsModule {}
