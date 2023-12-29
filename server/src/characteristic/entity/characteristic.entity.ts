import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "src/product/entities/product.entity";

@Table({ tableName: 'characteristic' })
export class Characteristic extends Model<Characteristic>{ 
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @Column({ type: DataType.STRING })
  @ApiProperty({ type: String, example: 'Size' })
  name: string;

  @Column({ type: DataType.STRING })
  @ApiProperty({ type: String, example: 'Width' })
  value: string;

  @Column({ type: DataType.STRING })
  @ApiProperty({ type: String, example: '71.6 mm' })
  title: string;

  @BelongsTo(() => Product)
  @ApiProperty({ type: () => Product})
  product: Product;

  @ForeignKey(()=> Product)
  @Column({type: DataType.INTEGER})
  @ApiProperty({ type: Number, example: 1 })
  productId: number;
}