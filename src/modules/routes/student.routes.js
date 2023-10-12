const { Router } = require("express");
const {
  createStudentCtrl,
} = require("../controller/student/create-student.controller");
const { fileUpload } = require("../../helper/fileUploader");
const { validator } = require("../../helper/validator");
const { studentSchema } = require("../validation/student.validation");
const {
  getStudentCtrl,
} = require("../controller/student/get-student.controller");
const {
  deleteStudentCtrl,
} = require("../controller/student/delete-student.controller");

let route = Router();
route.post(
  "/",
  fileUpload("./upload/student").single("image"),
  validator(studentSchema),
  createStudentCtrl
);
route.get("/", getStudentCtrl);
route.delete("/", deleteStudentCtrl);

exports.studentRoutes = route;
