const { StudentModel } = require("../../../model/student.model");
const { commonRepository } = require("../../../repository/common.repository");

exports.getStudentService = () => {
  const students = commonRepository(StudentModel).find({},3,{marks:-1});

  return students
};
