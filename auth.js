const jwt = require("jsonwebtoken");
const User = require("./db/userModel")
const bcrypt = require("bcrypt")

function generateToken(user) {
  return jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: "1800s", });
}

// function validateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//
//   if (token == null) return res.sendStatus(401);
//
//   jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//     if (err) return res.sendStatus(403);
//     req.tokenData = decoded;
//     next();
//   });
// }

// auth.js
exports.register = async (req, res, next) => {
  const { email, password } = req.body
  if (password.length < 8) {
    return res.status(400).json({ message: "Password less than 8 characters" })
  }
  // generate salt to hash password
  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  user.password = await bcrypt.hash(user.password, salt);
  const token = generateToken(email);
  try {
    const user = await User.create({
      email,
      password: hash,
    })
    res.status(200).json({
      user: {
        email
      },
      token: `Bearer ${token}`
    })
  } catch (err) {
    console.log('err', err)
    res.status(401).json({
      message: "User not successful created",
      error: err.mesage,
    })
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = generateToken(email);
        res.status(200).json({
          user: {
            email
          },
          token: `Bearer ${token}`
        })
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log('err', err)
  }
}
