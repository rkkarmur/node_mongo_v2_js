const { StudentModel } = require("../../../model/student.model");
const { commonRepository } = require("../../../repository/common.repository");
// commonRepository(StudentModel)
exports.createStudentService = (input) => {
  const student = commonRepository(StudentModel).create(input);
};
