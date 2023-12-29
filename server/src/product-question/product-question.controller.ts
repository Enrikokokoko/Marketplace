import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductQuestionService } from './product-question.service';
import { CreateProductQuestionDto } from './dto/create-product-question.dto';
import { UpdateProductQuestionDto } from './dto/update-product-question.dto';

@Controller('product-question')
export class ProductQuestionController {
  constructor(private readonly productQuestionService: ProductQuestionService) {}

  @Post()
  create(@Body() createProductQuestionDto: CreateProductQuestionDto) {
    return this.productQuestionService.create(createProductQuestionDto);
  }

  @Get()
  findAll() {
    return this.productQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productQuestionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductQuestionDto: UpdateProductQuestionDto) {
    return this.productQuestionService.update(+id, updateProductQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productQuestionService.remove(+id);
  }
}
