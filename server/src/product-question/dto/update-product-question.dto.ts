import { PartialType } from '@nestjs/mapped-types';
import { CreateProductQuestionDto } from './create-product-question.dto';

export class UpdateProductQuestionDto extends PartialType(CreateProductQuestionDto) {}
