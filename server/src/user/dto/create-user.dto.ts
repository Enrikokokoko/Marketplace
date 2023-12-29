import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, example: 'Enriko', description: 'name' })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, example: 'Ray', description: 'surname' })
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({ type: String, example: 'example@gmail.com', description: 'email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 12, { message: 'Must be greater than 5 and less than 12' })
  @ApiProperty({ type: String, example: '12345', description: 'password' })
  password: string;
}
