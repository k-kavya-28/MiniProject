const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
