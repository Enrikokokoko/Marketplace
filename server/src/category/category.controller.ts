import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Res, UploadedFiles } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiConsumes } from '@nestjs/swagger';
import { Response } from "express";
import { FilesInterceptor } from '@nestjs/platform-express';
import { UPLOAD_IMG_CATEGORY } from 'src/shared/middleware/upload-product-img';
import { InformationRes } from 'src/shared/res/information';
import { Created } from 'src/shared/status/201';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('new')
  @UseInterceptors(FilesInterceptor('image', 2, UPLOAD_IMG_CATEGORY))
  @ApiConsumes("multipart/form-data")
  public async create(@Body() body: CreateCategoryDto, @UploadedFiles() image: Express.Multer.File[], @Res() res: Response<InformationRes | Created>): Promise<Response> {
      if(image.length < 1) {
        return res.status(200).json({
          message: "at least 1 image",
          success: false
        })
      }
     
      const newCategory: Partial<Category> = { 
        ...body,
        img: image.map(value => value.filename) 
      }
  
      const result = await this.categoryService.create(newCategory)
  
      return res.status(201).json({
        id: result.id,
        message: 'successfuly created',
        success: true
      })
  }

  @Get('search/:id')
  public async getCAtegoryById(@Param('id') id: number) {
    const category = await this.categoryService.getCategoryById(id)
    return category
  }
}
