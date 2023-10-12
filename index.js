const { connectDB } = require("./src/helper/db/mongo/connection");
const { webServer } = require("./src/server");

const server=async()=>{
await connectDB()
webServer()
}
server()