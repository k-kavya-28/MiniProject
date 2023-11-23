const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config()
const port = process.env.PORT; // or your desired port

app.use(express.json());

// Connect to MongoDB Atlas
try {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("DB has connected")
  });
} catch (error) {
  console.log(error);
}

// Use authentication routes
// app.use('/auth', authRoutes);

// Use signup routes
app.use('/user', require("./routes/user.routes"));
app.use('/laundary', require("./routes/laundary.routes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});