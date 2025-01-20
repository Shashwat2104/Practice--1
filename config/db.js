const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.qoffovv.mongodb.net/practice"
    );
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("MongoDB connection failed");
  }
};

module.exports = connectDB;
