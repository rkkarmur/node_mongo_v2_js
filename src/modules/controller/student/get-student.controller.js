const { getStudentService } = require("../../service/student/get-student.service");

exports.getStudentCtrl = async (req, res) => {
    const input = {
        limit: req.query.limit || 3,
        offset: req.query.offset || 0,
        order_field: req.query.order_field,
        order: req.query.order
    };
    let data=await getStudentService(input);
    res.status(200).send({data});
  };
  