import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";

@Table({ tableName: 'feedback' })
export class Feedback extends Model<Feedback>{ 
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @ApiProperty({ type: Number, example: '1' })
  id: number;

  @Column({ type: DataType.STRING })
  @ApiProperty({ type: String, example: 'Very good quality and pretty convenient' })
  text: string;

  @Column({ type: DataType.STRING, allowNull: true })
  @ApiProperty({ type: String, example: 'Very convenient'})
  advantage: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  @ApiProperty({ type: String, example: 'Percentag of acomulator is not equal to maximum' })
  disadvantage: string | null;

  @Column({ type: DataType.FLOAT })
  @ApiProperty({ type: Number, example: 4.5 })
  rating: number;

  @BelongsTo(() => User)
  @ApiProperty({type: () => User})
  author: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  @ApiProperty({type: Number, example: 1})
  userId: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  @ApiProperty({type: Number, example: 1})
  productId: number;
}