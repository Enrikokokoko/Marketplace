import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto, RegistrDto } from './dto/user-auth.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { Token } from './interface/auth-interface';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
import { TokenDto } from 'src/token/dto/token.dto';

@Injectable()
export class AuthService {
  public constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) {}

  public async login(user: LoginDto): Promise<Token> {
    const existingUser = await this.userService.getUserByEmail(user.email);

    if (!existingUser) {
      throw new UnauthorizedException('User is incorrect');
    }

    const verifyPassword = await bcrypt.compare(
      user.password,
      existingUser.password,
    );
    if (verifyPassword) {
      const tokens = await this.generateToken(existingUser);
      await this.tokenService.saveToken(existingUser.id, tokens.refreshToken);
      return tokens;
    } else {
      throw new UnauthorizedException('Password is incorrect');
    }
  }

  public async registr(createUser: RegistrDto): Promise<Token> {
    const existingUser = await this.userService.getUserByEmail(
      createUser.email,
    );

    if (existingUser) {
      throw new HttpException(
        `User with this email ${createUser.email} already exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(createUser.password, 10);

    const user = await this.userService.createUser({
      ...createUser,
      password: hashPassword,
    });

    const tokens = await this.generateToken(user);
    await this.tokenService.saveToken(user.id, tokens.refreshToken);
    return tokens;
  }

  public async refreshToken(refreshToken: string): Promise<Token> {
    const token = await this.tokenService.findToken(refreshToken);
    if (!token) {
      throw new HttpException('Token was not found', HttpStatus.UNAUTHORIZED);
    }

    const decodeData: TokenDto = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_SECRET,
    });
    if (!decodeData) {
      throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
    }

    const user = await this.userService.getUserByEmail(decodeData.email);
    if (!user) {
      throw new HttpException('User was not found', HttpStatus.BAD_REQUEST);
    }

    const tokens = await this.generateToken(user);
    await this.tokenService.saveToken(user.id, tokens.refreshToken);
    return tokens;
  }

  public async logout(refreshToken: string): Promise<void> {
    const token = await this.tokenService.findToken(refreshToken);
    if (token) {
      await this.tokenService.removeToken(token.userId);
    }
  }

  private async generateToken(user: User): Promise<Token> {
    try {
      const payload: TokenDto = {
        username: `${user.firstName} ${user.lastName}`,
        email: user.email,
        id: user.id,
      };

      return {
        accessToken: this.jwtService.sign(payload, {
          expiresIn: process.env.ACCESSTOKEN_TIME,
          secret: process.env.ACCESS_TOKEN_SECRET,
        }),
        refreshToken: this.jwtService.sign(payload, {
          expiresIn: process.env.REFRESHTOKEN_TIME,
          secret: process.env.REFRESH_TOKEN_SECRET,
        }),
      };
    } catch (e) {
      throw new HttpException(
        'Tokin generate error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
