const mongoose = require("mongoose");

const Request = mongoose.model("Second", {
  name: String,
  email: String,
  user: String,
  account: Boolean,
});

module.exports = Request;
