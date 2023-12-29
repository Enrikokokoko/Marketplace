import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors, HttpException, HttpStatus, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UPLOAD_IMG_PRODUCT } from 'src/shared/middleware/upload-product-img';
import { ApiConsumes, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateProductDto } from './dto/product.dto';
import { Response } from "express";
import { Created } from 'src/shared/status/201';
import { InformationRes } from 'src/shared/res/information';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post("new")
  @UseInterceptors(FilesInterceptor('img', 5, UPLOAD_IMG_PRODUCT))
  @ApiConsumes("multipart/form-data")
  @ApiOkResponse({ type: InformationRes })
  @ApiCreatedResponse({ type: Created })
  public async createProduct(@Body() body: CreateProductDto, @UploadedFiles() img: Express.Multer.File[], @Res() res: Response<InformationRes | Created>): Promise<Response> {
    if(img.length < 1) {
      return res.status(200).json({
        message: 'Minimum number of img at least 1',
        success: false
      })
    }

    const newProduct: Partial<Product> = {
      ...body,
      img: img.map(value => value.filename)
    } 

    const product = await this.productService.createProduct(newProduct)

    return res.status(201).json({
      id: product.id,
      message: 'Successfully created',
      success: true
    })
  } 

  @Get()
  public getProducts() {}

  @Get()
  public getProductById() {}

  @Get()
  public getProductsByGroup() {}

  @Get()
  public getProductsByCategory() {}

  @Get()
  public getProductsBySubcategory() {}

  @Get()
  public getProductsByBrand() {}

  @Patch()
  public updateProductById() {}

  @Delete()
  public deleteProductById() {}
}
 