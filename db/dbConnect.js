const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  mongoose.set("strictQuery", false);
  mongodb.connect(
    process.env.DB_URL,
    (err) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(err);
    }
  );
}

module.exports = dbConnect;
