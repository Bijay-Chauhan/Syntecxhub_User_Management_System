const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

const express = require("express");
const app = express();

//for user routes
const userRoute = require("./routes/userRoute");
app.use("/", userRoute);

app.listen(8080, function () {
  console.log("Server is running.");
});
