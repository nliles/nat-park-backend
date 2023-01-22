require("dotenv").config();
const express = require("express");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const connectDB = require("./db/dbConnect");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("./db/model/userModel");
const authRoutes = require("./routes/authRoutes");
const parkRoutes = require("./routes/parkRoutes");
const bodyParser = require("body-parser");

//Connecting the Database
connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://www.natparkchecklist.com",
  "https://www.natparkchecklist.com/",
];

app.use(
  cors({
    origin: "https://www.natparkchecklist.com/",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

app.use(cookieParser(process.env.SESSION_SECRET_KEY));

const hour = 3600000;

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY, // name of cookie stored on client side
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    cookie: {
      secure: true,
      httpOnly: true,
      maxAge: hour * 3
    },
  })
);

app.use("/auth", authRoutes);

app.use("/", parkRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Nat Park Checklist Server</h1>");
});

app.use(express.json());

module.exports = app;
