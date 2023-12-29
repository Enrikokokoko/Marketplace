import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";

export function MulterLimit(fileS: number): MulterOptions["limits"] {
  return {
    fileSize: fileS * 1024 * 1024
  }
}