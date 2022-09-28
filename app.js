require("dotenv").config();
const express = require("express");
const connectDB = require("./db/dbConnect");
const app = express();
const cors = require("cors");
const router = express.Router();
const User = require("./db/model/userModel");
const bcrypt = require("bcrypt");
const authRoutes = require("./routes/authRoutes");
const parkRoutes = require("./routes/parkRoutes");
var bodyParser = require("body-parser");
var videos = require('./routes/index');

//Connecting the Database
connectDB();
const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const server = app.listen(port, function () {
  console.log("Server started successfully");
});

// Handling Error
process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});

app.use(cors({ credentials: true }));

app.use("/auth", authRoutes);

// app.use("/", parkRoutes);

app.use(express.json());

module.exports = app;
