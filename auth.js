const bcrypt = require("bcrypt");
const User = require("./db/model/userModel");

// auth.js
exports.register = async (req, res, next) => {
  const { email, password } = req.body;
  if (password.length < 8) {
    return res.status(400).json({ message: "Password less than 8 characters" });
  }
  // Validate if user exist in our database
  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res.status(409).json({ error: "User Already Exist. Please Login" });
  }
  // generate salt to hash password
  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  const hash = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({
      email,
      password: hash,
    });
    res.sendStatus(200);
  } catch (err) {
    res.status(401).json({
      message: "User not successful created",
      error: err.mesage,
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        req.session.user = email;
        req.session.admin = true;
        res.status(200).json({
          user: {
            email,
          },
        });
      } else {
        res.status(400).json({ error: "Wrong password. Please try again." });
      }
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log("err", err);
  }
};

exports.logout = async (req, res, next) => {
  req.session.destroy();
  res.send("logout success!");
};
