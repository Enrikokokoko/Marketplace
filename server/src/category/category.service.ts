import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './entities/category.entity';
import { Subcategory } from 'src/subcategory/entities/subcategory.entity';

@Injectable()
export class CategoryService {
  public constructor(@InjectModel(Category) private categoryRepository: typeof Category) {}

  public create(body: Partial<Category>): Promise<Category> {
    console.log(body);
    return this.categoryRepository.create(body)
  }

 public getCategoryById(id: number) {
  return this.categoryRepository.findOne({ where: { id }, include: [Subcategory]})
 }
}
