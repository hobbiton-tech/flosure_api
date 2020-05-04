import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { ProductDto } from '../../dtos/product.dto';
import { Product } from '../../entities/product.entity';
import { Class } from 'src/setups/entities/class.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly classRepository: Repository<Class>,
  ) {}

  findAll = async (classId: string) => {
    return this.productRepository.find();
  };

  createProduct = async (id: string, productDto: ProductDto) => {
    const classEntity = await this.classRepository.findOne({
      where: {
        id: Equal(id),
      },
    });

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
