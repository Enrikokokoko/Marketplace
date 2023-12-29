import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { FileType } from "./file";
import { BadRequestException } from "@nestjs/common";

export function multerFileFilter(fileType: FileType[]): MulterOptions["fileFilter"] {
  return (req, file, cd) => {
    if((fileType as string[]).includes(file.mimetype)) {
      cd(null, true)
    } else {
      console.log(fileType);
      console.log(file.mimetype);
      cd( new BadRequestException(null, {
        description: `Only type with this image ${fileType} is allowed`,
      }),
      false)
    }
  }
}