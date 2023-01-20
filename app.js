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
const bodyParser = require("body-parser");

//Connecting the Database
connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors({ credentials: true }));

app.use("/auth", authRoutes);

app.use("/", parkRoutes);

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

app.use(express.json());

module.exports = app;
