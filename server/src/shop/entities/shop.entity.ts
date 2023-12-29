import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Product } from "src/product/entities/product.entity";

@Table({ tableName: 'shop' })
export class Shop extends Model<Shop>{ 
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @Column({ type: DataType.STRING, unique: true })
  @ApiProperty({ type: String, example: 'Lenovo' })
  name: string;
  
  @ApiProperty({ type: () => [Product], example: [{name: 'Iphone X'}, {name:'Huawei P30'}] })
  @HasMany(() => Product)
  products: Product[];
}