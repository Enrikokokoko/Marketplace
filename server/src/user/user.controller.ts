import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody, ApiOkResponse, ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags("User")
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('new')
  @ApiOkResponse({type: User, description: 'create new user'})
  public async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    const user = await this.userService.createUser(createUser);
    return user;
  }

  @Get('email')
  @ApiOkResponse({type: User, description: 'search user by email'})
  @ApiBody({schema: {
    properties: {
      email: { format: 'email' }
    }
  }})
  public async getUserByEmail(@Param() email: string): Promise<User> {
    const user = await this.userService.getUserByEmail(email);
    return user;
  }
}
