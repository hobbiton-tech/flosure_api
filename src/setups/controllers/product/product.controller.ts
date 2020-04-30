import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProductDto } from '../../dtos/product.dto';
import { ProductService } from '../../services/product/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts() {
    return this.productService.findAll();
  }

  @Post()
  createProduct(@Body() ProductDto: ProductDto) {
    return this.productService.createProduct(ProductDto);
  }

  @Get(':id')
  getOneProduct(@Param('id') id: string) {
    return this.productService.findOneProduct(id);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() ProductDto: ProductDto) {
    return this.productService.updateProduct(id, ProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.removeProduct(id);
  }
}
