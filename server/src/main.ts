import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const congifswagger = new DocumentBuilder()
    .setTitle('Marketplace api')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, congifswagger);
  SwaggerModule.setup('/api/doc', app, document)

  app.use(cookieParser());

  app.enableCors({
    origin: 'http://localhost:4200', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    credentials: true
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3333);
}
bootstrap();
