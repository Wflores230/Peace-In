const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: {
      type: String,
      required: true
  },
  username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 10
  },
  date: {
    type: Date,
    default: Date.now
  }
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
