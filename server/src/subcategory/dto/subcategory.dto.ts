import { Transform } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSubcategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Transform(({value}) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;
}
