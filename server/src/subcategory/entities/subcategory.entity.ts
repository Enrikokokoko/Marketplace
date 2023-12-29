import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Category } from "src/category/entities/category.entity";
import { Product } from "src/product/entities/product.entity";

@Table({ tableName: 'subcategory' })
export class Subcategory extends Model<Subcategory>{ 
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @Column({ type: DataType.STRING, unique: true })
  @ApiProperty({ type: String, example: 'IPhone' })
  name: string;
  
  @Column({ type: DataType.ARRAY(DataType.STRING) })
  @ApiProperty({ type: [String], example: ['example1.png', 'example2.png'] })
  img: string[];

  @BelongsTo(() => Category, { foreignKey: 'categoryId' })
  @ApiProperty({ type: () => Category})
  category: Category;

  @Transform(({value}) => Number(value))
  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  @ApiProperty({ type: String, example: 1 })
  categoryId: number

  @ApiProperty({ type: () => [Product], example: [{name: 'Iphone X'}, {name:'Huawei P30'}] })
  @HasMany(() => Product)
  products: Product[];
}