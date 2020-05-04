import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { ProductDto } from '../../dtos/product.dto';
import { Product } from '../../entities/product.entity';
import { Class } from 'src/setups/entities/class.entity';
import { ProductRepository } from 'src/setups/repositories/product.repository';
import { ClassRepository } from 'src/setups/repositories/class.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: ProductRepository,
    private readonly classRepository: ClassRepository,
  ) {}

  findAll = async (classId: string) => {
    return this.productRepository.find();
  };

  createProduct = async (id: string, productDto: ProductDto) => {
    console.log(id);
    const classEntity = await this.classRepository.findOne({
      where: {
        id: Equal(id),
      },
      relations: ['products'],
    });

    console.log(classEntity);

    let product = new Product();
    product.productName = productDto.productName;
    product.productClaimNumberPrefix = productDto.productClaimNumberPrefix;
    product.productDescription = productDto.productDescription;
    product.productCode = productDto.productCode;
    product.productPolicyNumberPrefix = productDto.productPolicyNumberPrefix;

    await this.productRepository.save(product);
    classEntity.products.push(product);
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
