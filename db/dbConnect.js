const mongoose = require("mongoose")

const localDB = 'mongodb+srv://nliles:uxcnTuEl5WjdwVuD@cluster0.nhfe9l0.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
  await mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}



module.exports = connectDB
