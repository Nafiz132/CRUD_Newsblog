require("dotenv").config();
const express = require("express");
const userRouter = require("./api/users/user.router");
const morgan = require("morgan");
const bodyparser = require("body-parser");
/*app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "This is rest API working...",
  });
});*/
const app = express();
app.use(bodyparser.json());
app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server Up and Running on PORT : ", process.env.APP_PORT);
});
