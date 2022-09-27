const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
  // email field
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  // password field
  password: {
    type: String,
    minlength: 8,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});

// export UserSchema
const User = mongoose.model("user", UserSchema);
module.exports = User;
