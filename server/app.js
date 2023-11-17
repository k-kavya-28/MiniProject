const express = require('express');
const mongoose = require('mongoose');
const studentRoute = require('./routes/student');

const app = express();
const port = 3000; // or your desired port

app.use(express.json());

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/WashWise', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://admin:<Mongodb#11>@cluster0.ihowjh3.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Use student route
app.use('/student', studentRoute);

app.use((req, res, next) => {
  console.log(`Received a ${req.method} request at ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
