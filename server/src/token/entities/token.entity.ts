import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/user/entities/user.entity";

@Table({ tableName: 'refresh_token'})
export class Token extends Model<Token> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  refreshToken: string;
}
