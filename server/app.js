const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
require('dotenv').config()
const port = process.env.PORT; // or your desired port

app.use(express.json());

const allowedOrigins = ["http://localhost:1234", "*"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes("*")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

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
app.use('/laundry', require("./routes/laundry.routes"));
app.use('/staff', require("./routes/staff.routes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});