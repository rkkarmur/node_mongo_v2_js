const { StudentModel } = require("../../../model/student.model");
const { commonRepository } = require("../../../repository/common.repository");
// commonRepository(StudentModel)
exports.deleteStudentService = () => {
  const student = commonRepository(StudentModel).delete({
    create_at: { $lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
  });
};
