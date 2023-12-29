import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'users' })
export class User extends Model<User>{
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  @ApiProperty({ type: Number, example: '1' })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  @ApiProperty({ type: String, example: 'Enriko' })
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  @ApiProperty({ type: String, example: 'Ray' })
  lastName: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  @ApiProperty({ type: String, example: 'user@example.com' })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  @ApiProperty({ type: String, example: '12345' })
  password: string;
}