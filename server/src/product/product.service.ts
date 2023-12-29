import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Model } from 'sequelize';

@Injectable()
export class ProductService {

  public constructor(@InjectModel(Product) private productRepository: typeof Product) {}

  public async createProduct(body: Partial<Product>): Promise<Product> {
    return (await this.productRepository.create(body)).save()
  } 

  public getProducts() {}

  public getProductById() {}

  public getProductsByGroup() {}

  public getProductsByBrand() {}

  public updateProductById() {}

  public deleteProductById() {}
}
