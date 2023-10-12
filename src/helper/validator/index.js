const { fileDeleteLocally } = require("../fileUploader/fileDelete");

exports. validator = (schema) => {
    return async (req, res, next) => {
      const options = {
        abortEarly: false, 
      };
  
      const bodyResult = schema.validate(req.body, options);
      if (bodyResult.error) {

        if(req?.file?.path){
           await fileDeleteLocally(req.file.path)
        }

        const responseError = bodyResult.error.details.map((v) => {
          return { message: v.message, path: v.path[0] };
        });
        return res.status(400).json({
          status: false,
          error: "validation error",
          message: responseError,
        });
      }
  
      next();
    };
  };