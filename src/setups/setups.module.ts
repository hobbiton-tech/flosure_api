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

@Module({
  imports: [TypeOrmModule.forFeature([Class, Product])],
  providers: [ClassService, ProductService, CoverTypeService, PerilService],
  controllers: [
    ClassController,
    ProductController,
    CoverTypeController,
    PerilController,
  ],
})
export class SetupsModule {}
