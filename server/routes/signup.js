// routes/signup.js

const express = require('express');
const router = express.Router();

// Sample route for signup
router.post('../../src/student/signup', (req, res) => {
  // Handle signup logic here
  // Access request data using req.body

  // For example, you can send a response back
  res.status(200).json({ message: 'Signup successful!' });
});

// Add more routes as needed

module.exports = router;
