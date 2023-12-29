import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";
import { Characteristic } from "../interface/product.interface";
import { Feedback } from "src/feedback/entities/feedback.entity";
import { ProductQuestion } from "src/product-question/entities/product-question.entity";
import { Transform } from "class-transformer";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;
  
    @IsString()
    @IsNotEmpty()
    brand: string;
  
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(9999)
    @Transform(({ value }) => Number(value))
    price: number;
  
    @IsNumber()
    @IsOptional()
    @Min(1)
    @Max(9999)
    @Transform(({ value }) => Number(value))
    discountPrice?: number;

    @IsNumber()
    @Min(1)
    @Max(20)
    @Transform(({ value }) => Number(value))
    quantity: number;
  
    @IsString()
    @IsNotEmpty()
    group: string
  
    @IsArray()
    @IsOptional()
    feedBacks: Feedback[] = [];

    @IsArray()
    @IsOptional()
    questions: ProductQuestion[] = [];
    
    @IsArray()
    @ArrayNotEmpty()
    characteristics: Characteristic[];
  
    @IsNumber()
    @IsNotEmpty()
    subCategoryId: number;
  
    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
}
