import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Token } from 'src/token/entities/token.entity';
import { TokenModule } from 'src/token/token.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService],
  imports: [
    UserModule, 
    TokenModule,
    SequelizeModule.forFeature([User, Token]),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: {
        expiresIn: parseInt(process.env.ACCESSTOKEN_TIME),
      },
    }),
  ]
})
export class AuthModule {}
