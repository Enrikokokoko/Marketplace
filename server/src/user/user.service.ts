import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  public constructor(@InjectModel(User) private userRepository: typeof User) {}

  public async createUser(createUser: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(createUser);
    return user;
  }

  public async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }
}
