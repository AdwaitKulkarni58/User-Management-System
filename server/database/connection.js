const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewURLParser: true,
    });
    console.log("Connected to database");
  } catch (err) {
    console.error(err);
  }
};
module.exports = connectDB;
