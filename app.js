require('dotenv').config()
const express = require("express");
const connectDB = require("./db/dbConnect");
const app = express();
const cors = require('cors')
const router = express.Router();
const User = require("./db/userModel")
const bcrypt = require("bcrypt")
const authRoutes = require('./authRoutes')
var bodyParser = require('body-parser')

//Connecting the Database
connectDB();

let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const server = app.listen(port, function() {
   console.log("Server started successfully");
});

// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})

app.use(cors({ credentials: true }))

app.use('/auth', authRoutes)

app.use(express.json())

app.get("/", function(req, res) {
  res.send('hi');
});

module.exports = app;
