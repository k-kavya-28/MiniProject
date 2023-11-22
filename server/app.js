const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const signupRoutes = require('./routes/signup'); // Import the signup route

const app = express();
const port = 3000; // or your desired port

app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://admin:Mongodb%2311@cluster0.ihowjh3.mongodb.net/WashWise', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use authentication routes
app.use('/auth', authRoutes);

// Use signup routes
app.use('../../signup', signupRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
