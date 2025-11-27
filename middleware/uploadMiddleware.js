import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = req.uploadFolder;

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    cb(null, folder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) cb(null, true);
  else cb(new Error("Only image files allowed!"), false);
};

export const uploadSingleImage = multer({
  storage,
  fileFilter: imageFilter
}).single("image");

export const uploadMultipleImages = multer({
  storage,
  fileFilter: imageFilter
}).array("images", 10);

export const uploadAnyFile = multer({
  storage
}).single("file");
