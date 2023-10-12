const {
  createStudentService,
} = require("../../service/student/create-student.service");

exports.createStudentCtrl = async (req, res) => {
  try {
    const input = {
      name: req.body.name,
      marks: req.body.marks,
      image: req.file.path,
      create_at: req.body.create_at || Date.now(),
    };
    await createStudentService(input);
    res.status(201).send("Created");
  } catch (error) {
    if (req?.file?.path) await fileDeleteLocally(req?.file?.path);
    res.status(500).send("server error");
  }
};
