import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Res, UploadedFiles } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { Response } from "express";
import { Subcategory } from './entities/subcategory.entity';
import { CreateSubcategoryDto } from './dto/subcategory.dto';
import { InformationRes } from 'src/shared/res/information';
import { Created } from 'src/shared/status/201';
import { UPLOAD_IMG_SUBCATEGORY } from 'src/shared/middleware/upload-product-img';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Post('new')
  @UseInterceptors(FilesInterceptor('img', 1, UPLOAD_IMG_SUBCATEGORY))
  @ApiConsumes("multipart/form-data")
  public async create(@Body() body: CreateSubcategoryDto, @UploadedFiles() img: Express.Multer.File[], @Res() res: Response<InformationRes | Created>) {

    if(img.length < 1) {
      return res.status(200).json({
        message: "at least 1 image",
        success: false
      })
    }
   
    const newCategory: Partial<Subcategory> = { 
      ...body,
      img: img.map(value => value.filename) 
    }

    const result = await this.subcategoryService.create(newCategory)

    return res.status(201).json({
      id: result.id,
      message: 'successfuly created',
      success: true
    })
  }
}
