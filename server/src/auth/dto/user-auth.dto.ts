import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class RegistrDto {
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  @ApiProperty({ type: String, example: 'Enriko', description: 'name' })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  @ApiProperty({ type: String, example: 'Ray', description: 'surname' })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, example: 'example@gmail.com', description: 'email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 12, { message: 'Must be greater than 5 and less than 12' })
  @IsDefined()
  @ApiProperty({ type: String, example: '12345', description: 'password' })
  password: string;
}

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @IsDefined()
  @ApiProperty({ type: String, example: 'example@gmail.com', description: 'email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 12, { message: 'Must be greater than 5 and less than 12' })
  @IsDefined()
  @ApiProperty({ type: String, example: '12345', description: 'password' })
  password: string;
}