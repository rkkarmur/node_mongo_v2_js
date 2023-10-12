const Joi =require('joi')

exports.studentSchema = Joi.object({
    name: Joi.string().required(),
    marks: Joi.number().required(),
    image: Joi.string().allow(null,""),
    create_at: Joi.date()
});

