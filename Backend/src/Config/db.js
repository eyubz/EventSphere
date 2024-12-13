const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

module.exports = connectDB;
