const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3000; // or your desired port

app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://khushikavya6910:oaoBdPHYvHvNzuH7@cluster0.t7qcbnn.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use authentication routes
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});