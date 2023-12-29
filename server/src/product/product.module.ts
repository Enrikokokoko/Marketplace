import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { Feedback } from 'src/feedback/entities/feedback.entity';
import { ProductQuestion } from 'src/product-question/entities/product-question.entity';
import { Shop } from 'src/shop/entities/shop.entity';
import { Subcategory } from 'src/subcategory/entities/subcategory.entity';
import { Category } from 'src/category/entities/category.entity';

@Module({
  imports: [SequelizeModule.forFeature([Product, Feedback, ProductQuestion, Shop, Subcategory, Category])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
