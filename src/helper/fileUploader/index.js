const multer = require("multer");
const { v4 } = require("uuid");
const fs = require("fs");
exports.fileUpload = (path) => {
  //    "./public/images/backend/store-product"
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
  let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path);
    },
    filename: function (req, file, cb) {
      let uploaded_fn = v4();

      let abc = file.mimetype.split("/");
      cb(null, uploaded_fn + "." + abc[1]);
    },
  });
  let fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  let upload = multer({
    storage: storage,
    limits: {
      fileSize: 4000 * 1024 * 1024,
    },
    fileFilter: fileFilter,
  });
  return upload;
};
