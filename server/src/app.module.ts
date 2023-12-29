import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ShopModule } from './shop/shop.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { FeedbackModule } from './feedback/feedback.module';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/entities/user.entity';
import { TokenModule } from './token/token.module';
import { Token } from './token/entities/token.entity';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { ProductQuestionModule } from './product-question/product-question.module';
import { Product } from './product/entities/product.entity';
import { ProductQuestion } from './product-question/entities/product-question.entity';
import { Feedback } from './feedback/entities/feedback.entity';
import { Category } from './category/entities/category.entity';
import { Subcategory } from './subcategory/entities/subcategory.entity';
import { Shop } from './shop/entities/shop.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        autoLoadModels: true,
        synchronize: true,
        models: [User, Token, Product, ProductQuestion, Feedback, Category, Subcategory, Shop],
    }),
    ProductModule, 
    ShopModule, 
    AuthModule, 
    OrderModule, 
    PaymentModule, 
    FeedbackModule, 
    UserModule, TokenModule, CategoryModule, SubcategoryModule, ProductQuestionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

