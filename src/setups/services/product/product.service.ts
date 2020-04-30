import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from '../../dtos/product.dto';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll = async () => {
    return this.productRepository.find();
  };

  createProduct = async (productDto: ProductDto) => {
    return this.productRepository.save(productDto);
  };

  findOneProduct = async (id: string) => {
    return this.productRepository.findOneOrFail(id);
  };

  updateProduct = async (id: string, productDto: ProductDto) => {
    return this.productRepository.save({ ...productDto, id: id });
  };

  removeProduct = async (id: string) => {
    await this.productRepository.findOneOrFail(id);
    return this.productRepository.delete(id);
  };
}
