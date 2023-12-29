import { Injectable } from '@nestjs/common';
import { CreateProductQuestionDto } from './dto/create-product-question.dto';
import { UpdateProductQuestionDto } from './dto/update-product-question.dto';

@Injectable()
export class ProductQuestionService {
  create(createProductQuestionDto: CreateProductQuestionDto) {
    return 'This action adds a new productQuestion';
  }

  findAll() {
    return `This action returns all productQuestion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productQuestion`;
  }

  update(id: number, updateProductQuestionDto: UpdateProductQuestionDto) {
    return `This action updates a #${id} productQuestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} productQuestion`;
  }
}
