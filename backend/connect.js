const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);

    console.log(
      `MongoDB Connected: ${connect.connection.host}${connect.connection.port} ${connect.connection.name} 😎`
    );
  } catch (err) {
    console.error(err);
    throw new Error("MongoDB Connection Error");
  }
};

module.exports = { connectDB };
