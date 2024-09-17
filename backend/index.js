const express = require("express");
const { connectDB } = require("./connect");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
// const cors = require('cors');

// Importing Routes
const authRoutes = require("./routes/auth");
const chatRoutes = require("./routes/chat");
const { checkAuth } = require("./middlewares/auth.js");

const app = express();

// // Middleware
// app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(checkAuth);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the EliteCare Backend API");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("api/chat", chatRoutes)

// Start the server

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
