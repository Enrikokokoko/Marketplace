import { ApiProperty } from "@nestjs/swagger";

export class Created {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String, example: "Successfully created" })
  message: string;

  @ApiProperty({ type: Boolean, example: true })
  success: true;
}
