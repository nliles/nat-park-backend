const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = dbConnect;
