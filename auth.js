const bcrypt = require("bcrypt");
const User = require("./db/model/userModel");

const passwordErrorMsg = "Password must have at least 8 characters.";
const userExistsErrorMsg =
  "The email address provided may be registered already.";
const invalidErrorMsg = "You have entered an invalid username or password.";
const generalErrorMsg = "Something went wrong. Please try again later.";

// auth.js
exports.register = async (req, res, next) => {
  const { email, password } = req.body;
  if (password.length < 8) {
    return res.status(400).json({ message: passwordErrorMsg });
  }
  // Validate if user exist in our database
  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res.status(409).json({ message: userExistsErrorMsg });
  }
  // Generate salt to hash password
  const salt = await bcrypt.genSalt(10);
  // Set user password to hashed password
  const hash = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({
      email,
      password: hash,
    });
    return res.status(200).json({
      user: {
        email,
        token: `Bearer ${token}`,
      },
    });
  } catch (err) {
    return res.status(401).json({
      message: "User not successful created",
      error: err.mesage,
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: invalidErrorMsg });
    } else {
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
        return res.status(401).json({ message: invalidErrorMsg });
      }
    }
  } catch (err) {
    return res.status(500).json({ message: generalErrorMsg });
  }
};

exports.logout = async (req, res, next) => {
  req.session.destroy();
  return res.send("logout success!");
};
