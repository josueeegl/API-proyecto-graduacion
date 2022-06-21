const mongoose = require("mongoose");
const schema = mongoose.Schema();

const Users = new mongoose.Schema({
  nombre: String,
  email: String,
  password: String,
  salt: String,
  role: {type: String, default: 'user'},
});

module.exports = mongoose.model("User", Users);
