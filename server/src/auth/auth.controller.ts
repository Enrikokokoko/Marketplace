import { Body, Controller, HttpException, HttpStatus, Post, Req, Res, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegistrDto } from './dto/user-auth.dto';
import { Tokens } from 'src/token/dto/token.dto';
import { Request, Response } from 'express';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: Tokens, status: 201, description: 'user login' })
  public async login(@Body() user: LoginDto, @Res() res: Response<Tokens>, @Req() req: Request ): Promise<Response> {
    const tokens = await this.authService.login(user);
    const refreshToken = req.cookies.refreshToken
    console.log(refreshToken);
    res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true })
    return res.status(201).json({
      accessToken: tokens.accessToken
    })
  }

  @Post('registr')
  @ApiOkResponse({ type: Tokens, status: 201, description: 'user registration' })
  public async registr(@Body(new ValidationPipe()) user: RegistrDto, @Res() res: Response<Tokens>): Promise<Response> {
    const tokens = await this.authService.registr(user)
    res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true })
    return res.status(201).json({
      accessToken: tokens.accessToken
    })
  }

  @Post('logout')
  @ApiResponse({ status: 204, description: 'user logout' })
  public async logout(@Req() req: Request, @Res() res: Response): Promise<void> {
    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken) {
      throw new HttpException('refreshToken was not found', HttpStatus.UNAUTHORIZED)
    }

    await this.authService.logout(refreshToken)
    res.clearCookie('refreshToken');
    res.status(HttpStatus.NO_CONTENT).send()
  }

  @Post('refresh-token')
  @ApiOkResponse({ type: Tokens, description: 'refresh access token' })
  public async refreshToken(@Req() req: Request, @Res() res: Response): Promise<Tokens> {
    const refreshToken = req.cookies.refreshToken;
    
    if(!refreshToken) {
      throw new HttpException('refreshToken was not found', HttpStatus.UNAUTHORIZED)
    }

    try {
      const newTokens = await this.authService.refreshToken(refreshToken)
      res.cookie('refreshToken', newTokens.refreshToken, { httpOnly:true })
      return { accessToken: newTokens.accessToken }
    } catch(e) {
      throw new HttpException('Unable to refresh token', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
