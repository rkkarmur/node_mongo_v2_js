const { Router } = require("express");
const {  studentRoutes } = require("../modules/routes/student.routes");

class V1Routes {
  path() {
    const router = Router();

    router.use("/student",studentRoutes);

    router.all("**", (req, res) => {
      return res.status(404).json({
        version: "1.0",
      });
    });


    return router;
  }
}

module.exports = V1Routes;
