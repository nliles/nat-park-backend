require("dotenv").config();
const express = require('express');
const MongoStore = require('connect-mongo');
const session = require('express-session');
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

// app.use(cookieParser());

const hour = 3600000;

app.use(session({
  secret: process.env.SESSION_SECRET_KEY, // name of cookie stored on client side
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  cookie: { maxAge: hour }
}))

app.use("/auth", authRoutes);

app.use("/", parkRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Nat Park Checklist Server</h1>');
});

app.use(express.json());

module.exports = app;
