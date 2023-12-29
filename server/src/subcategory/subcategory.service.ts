import { Injectable } from '@nestjs/common';
import { Subcategory } from './entities/subcategory.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class SubcategoryService {

  public constructor(@InjectModel(Subcategory) private subcategoryRepository: typeof Subcategory) {}

  public create(body: Partial<Subcategory>) {
    return this.subcategoryRepository.create(body)
  }

}
