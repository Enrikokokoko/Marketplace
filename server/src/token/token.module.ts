import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Token } from './entities/token.entity';

@Module({
  providers: [TokenService],
  imports: [SequelizeModule.forFeature([Token])],
  exports: [TokenService]
})
export class TokenModule {}
