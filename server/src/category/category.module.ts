import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subcategory } from 'src/subcategory/entities/subcategory.entity';
import { Product } from 'src/product/entities/product.entity';
import { Category } from './entities/category.entity';

@Module({
  imports: [SequelizeModule.forFeature([Subcategory, Product, Category])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
