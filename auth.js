const User = require("./db/userModel")
const bcrypt = require("bcrypt")

// const jwt = require(‘jsonwebtoken’)

// function generateToken(user) {
//   return token = jwt.sign(user, process.env.JWT_SECRET, {
//      expiresIn: 60 * 60 * 24 // expires in 24 hours
//   });
// }

// auth.js
exports.register = async (req, res, next) => {
  const { email, password } = req.body
  if (password.length < 8) {
    return res.status(400).json({ message: "Password less than 8 characters" })
  }
  const hash = await bcrypt.hash(password, 10)
  const token = '123'
  try {
    const user = await User.create({
      email,
      password: hash,
    })
    res.status(200).json({
      user: {
        email
      },
      token
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
    const user = await User.findOne({ email, password })
    if (!user) {
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      })
    } else {
      res.status(200).json({
        message: "Login successful",
        user,
      })
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    })
  }
}
