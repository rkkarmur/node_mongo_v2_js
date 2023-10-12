

const mongoose=require('mongoose')
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/3rd";
exports.connectDB=async()=>{
try {
  await mongoose.connect(DB_URL,{ retryWrites: true, w: "majority" }).then(()=>{
    console.log("db connect")
  })
} catch (error) {
  console.log("fail to connect with db")
  throw Error(error);
}
}