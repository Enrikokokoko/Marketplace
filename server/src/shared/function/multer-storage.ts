import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import * as moment from "moment";
import { diskStorage } from "multer";

export function multerStorage(path: string): MulterOptions['storage'] {
  return diskStorage({
    destination: function(req, file, cb) {
      cb(null, `public/${path}`)
    },
    filename: function(req, file, cd) {
      const date = moment().format("DDMMYYYY-HHmmss-SSS")
      cd(null, `${date}-${file.originalname}`)
    }
  })
}