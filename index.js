require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const requestRoutes = require("./routes/request");
app.use(requestRoutes);

app.listen(process.env.PORT, (req, res) => {
  console.log("server is started");
});
