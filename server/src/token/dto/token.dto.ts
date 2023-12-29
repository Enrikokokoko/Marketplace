import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsJWT, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class TokenDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, example: 'Magnus' })
  username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({ type: String, example: 'example@gmail.com' })
  email: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: String, example: '1' })
  id: number;
}

export class Tokens {
  @IsJWT()
  @ApiProperty({ type: String })
  accessToken: string;

  @IsJWT()
  @ApiProperty({ type: String })
  refreshToken?: string;
}