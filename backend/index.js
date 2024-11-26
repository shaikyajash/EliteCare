const express = require("express");
const { connectDB } = require("./connect");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');

// Importing Routes
const authRoutes = require("./routes/auth");
const  ngoRoutes = require("./routes/ngo.js");
const  communityRoutes = require("./routes/community.js");
const llmRoutes = require("./routes/llm.js");
const { checkAuth } = require("./middlewares/auth.js");

const app = express();

// // Middleware
app.use(cors(
  {
    origin: 'https://elite-care-bice.vercel.app/',
    credentials: true
  }
)); // Enable Cross-Origin Resource Sharing


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
app.use("/api/ngo", ngoRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/llm", llmRoutes);



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
