const { deleteStudentService } = require("../../service/student/delete-student.service");

exports.deleteStudentCtrl = async (req, res) => {
try {
  await deleteStudentService();
  res.status(200).send("Ok");

} catch (error) {
  res.status(500).send("server error");
}
};
