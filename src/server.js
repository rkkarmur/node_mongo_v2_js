const express=require('express')
const { commonRepository } = require('./repository/common.repository')
const { StudentModel: UserModel } = require('./model/student.model')
const V1Routes  = require('./api')
const v1 = new V1Routes();
 exports.webServer=()=>{
  const app=express()
  app.use(express.json())
  app.use("/upload", express.static("upload"));

  app.use('/api/v1',v1.path())

   app.listen(3000,()=>{console.log("server is running 3000")})

}
