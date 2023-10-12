const mongoose = require("mongoose");
const studentSchema= new mongoose.Schema({
  name: {
    required: true,
    type: String,
    maxLength:150
  },
  marks:{
    required: true,
    type: Number,
  },

  image:{
    required: true,
    type: String,
  },
  create_at:{
    required: true,
    type:Date,
    default: Date.now()
  },
  update_at:{
    required: true,
    type:Date,
    default: Date.now()
  }
})

studentSchema.pre("save", function (next) {
  this.update_at = new Date();
  next();
});

exports.StudentModel=mongoose.models.student || mongoose.model("student", studentSchema);

