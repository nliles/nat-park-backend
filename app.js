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
const userParkRoutes = require("./routes/userParkRoutes");
const parkRoutes = require("./routes/parkRoutes");
const bodyParser = require("body-parser");

const HOUR = 3600000;
const PROD_ENV = process.env.NODE_ENV === "production";

connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://www.natparkchecklist.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["POST", "PATCH", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  }),
);

app.use(cookieParser(process.env.SESSION_SECRET_KEY));

app.use(
  session({
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    proxy: PROD_ENV ? true : undefined,
    cookie: {
      ...(PROD_ENV && {
        secure: true,
        httpOnly: true,
        sameSite: "none",
      }),
      maxAge: HOUR * 3,
    },
  }),
);

app.use("/auth", authRoutes);

app.use("/user", userParkRoutes);

app.use("/park", parkRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Nat Park Checklist Server</h1>");
});

app.use(express.json());

module.exports = app;
