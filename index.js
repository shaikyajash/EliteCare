const express = require('express');
const { connectToMongoDB } = require('./connect');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
// const cors = require('cors');


// Importing Routes
const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointment');
const serviceRoutes = require('./routes/services.js');
const doctorRoutes = require('./routes/doctors.js');
const cartRoutes = require('./routes/cart.js');
const blogRoutes = require('./routes/blog.js');

const app = express();
connectToMongoDB("mongodb://127.0.0.1:27017/eliteCare");

// // Middleware
// app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the EliteCare Backend API');
});

// API Routes
app.use('/api/auth', authRoutes);

app.use('/api/appointments', appointmentRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/blog', blogRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
