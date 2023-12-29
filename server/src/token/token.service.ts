import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Token } from './entities/token.entity';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class TokenService {

  public constructor(@InjectModel(Token) private tokenRepository: typeof Token) {}

  public async saveToken(userId: number, refreshToken: string) {
      const tokenData = await this.tokenRepository.findOne({ where: { refreshToken }});

      if(tokenData) {
        tokenData.refreshToken = refreshToken;
        return tokenData.save()
      }

      return this.tokenRepository.create({userId, refreshToken})
  }
  
  public async removeToken(userId: number) {
    await this.tokenRepository.destroy({ where: { userId }});
  }

  public findToken(refreshToken: string) {
    return this.tokenRepository.findOne({ where: { refreshToken }});
  }
}
