  import { ApiProperty } from "@nestjs/swagger";
  import {  Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
  import { Subcategory } from "src/subcategory/entities/subcategory.entity";

  @Table({ tableName: 'categories' })
  export class Category extends Model<Category>{ 
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    @ApiProperty({ type: Number, example: 1 })
    id: number;

    @Column({ type: DataType.STRING, unique: true })
    @ApiProperty({ type: String, example: 'Smartphones' })
    name: string;

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    @ApiProperty({ type: [String], example: ['example1.png', 'example2.png'] })
    img: string[];

    @ApiProperty({ type: () => [Subcategory], example: ['IPhone', 'Macbook'] })
    @HasMany(() => Subcategory)
    subcategories: Subcategory[];
  }