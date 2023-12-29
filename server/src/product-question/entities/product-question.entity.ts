import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";

@Table({ tableName: 'productQuestion' })
export class ProductQuestion extends Model<ProductQuestion>{ 
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @Column({ type: DataType.STRING })
  @ApiProperty({ type: String, example: 'Can i use this phone under the water?'})
  text: string

  @BelongsTo(() => User)
  @ApiProperty({type: () => User})
  author: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  @ApiProperty({ type: Number, example: 1 })
  userId: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  @ApiProperty({type: Number, example: 1})
  productId: number;
}