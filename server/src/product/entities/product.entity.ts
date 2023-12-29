import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, Table, Validate } from "sequelize-typescript";
import { Category } from "src/category/entities/category.entity";
import { Feedback } from "src/feedback/entities/feedback.entity";
import { ProductQuestion } from "src/product-question/entities/product-question.entity";
import { Subcategory } from "src/subcategory/entities/subcategory.entity";
import { Characteristic, Characteristics } from "../interface/product.interface";
import { Shop } from "src/shop/entities/shop.entity";

@Table({ tableName: 'product' })
export class Product extends Model<Product>{ 
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @Column({ type: DataType.STRING })
  @ApiProperty({ type: String, example: 'IPhone X', required: true })
  name: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  @ApiProperty({ type: [String], example: ['example1.png', 'example2.png'] })
  img: string[];

  @Column({ type: DataType.STRING })
  @ApiProperty({ type: String, example: 'Material - metal, Color - grey, Screen...' })
  description: string;

  @Column({ type: DataType.STRING })
  @ApiProperty({ type: String, example: 'IPhone' })
  brand: string;

  @Column({ type: DataType.INTEGER })
  @ApiProperty({ type: String, example: 1000 })
  price: number;

  @Column({ type: DataType.INTEGER })
  @ApiProperty({ type: String, example: 900 })
  discountPrice: number;

  @Column({ type: DataType.INTEGER })
  @ApiProperty({ type: String, example: 5 })
  quantity: number;

  @Column({ type: DataType.STRING })
  @ApiProperty({ type: String, example: 'IPhone' })
  group: string
  
  @HasMany(() => Feedback)
  @ApiProperty({ type: () => [Feedback], example: [{ Ivanka: 'Very good quality and pretty convenience' }] })
  feedBacks: Feedback[];
  
  @HasMany(() => ProductQuestion)
  @ApiProperty({ type: () => [ProductQuestion], example: [{ Ivanka: 'Can I use it under the water?' }] })
  questions: ProductQuestion[];
  
  @Validate({
    len: {
      args: [2,3],
      msg: 'minimum number of arguments should be at least 2-3'
    }
  })
  @Column({
    type: DataType.ARRAY(DataType.JSONB),
    defaultValue: []
  })
  @ApiProperty({ type: Array, example: [{ "Screen": { "Diagonal": 5.5, "type screen": "ISP" } }], description: 'Array of product characteristics' })
  characteristics: Characteristics[] | Characteristic[];
  
  @BelongsTo(() => Subcategory, { foreignKey: 'subCategoryId' })
  @ApiProperty({ type: () => Subcategory})
  subCategory: Subcategory;

  @ForeignKey(() => Subcategory)
  @Column({ type: DataType.INTEGER })
  @ApiProperty({ type: String, example: 1 })
  subCategoryId: number

  @BelongsTo(() => Category, { foreignKey: 'categoryId' })
  @ApiProperty({ type: () => Category})
  category: Category;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  @ApiProperty({ type: String, example: 1 })
  categoryId: number

  @BelongsTo(() => Shop, { foreignKey: 'shopId' })
  @ApiProperty({ type: () => Shop})
  shop: Shop;

  @ForeignKey(() => Shop)
  @Column({ type: DataType.INTEGER, allowNull: true })
  @ApiProperty({ type: String, example: 'Apple' })
  shopId: number | null;

  @Column({type: DataType.DATE, defaultValue: DataType.NOW})
  createdAt?: Date;

  @Column({type: DataType.DATE, defaultValue: DataType.NOW})
  updatedAt?: Date;
}

