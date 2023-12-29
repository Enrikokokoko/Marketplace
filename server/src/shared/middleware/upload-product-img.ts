import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { multerStorage } from "../function/multer-storage";
import { multerFileFilter } from "../function/multer-filter";
import { MulterLimit } from "../function/multer-limit";

export const UPLOAD_IMG_PRODUCT: MulterOptions = {
  storage: multerStorage('productimg'),
  fileFilter: multerFileFilter([
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp"
  ]),
  limits: MulterLimit(4)
}

export const UPLOAD_IMG_CATEGORY: MulterOptions = {
  storage: multerStorage('categoryimg'),
  fileFilter: multerFileFilter([
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp"
  ]),
}

export const UPLOAD_IMG_SUBCATEGORY: MulterOptions = {
  storage: multerStorage('subcategoryimg'),
  fileFilter: multerFileFilter([
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp"
  ]),
}