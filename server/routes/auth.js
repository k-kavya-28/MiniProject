const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/signup', async (req, res) => {
  try {
    const { name, branch, year, contactNumber, rollNumber, hostel } = req.body;

    // Check if the rollNumber already exists
    const existingUser = await User.findOne({ rollNumber });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this roll number already exists' });
    }

    // Create a new user
    const user = new User({ name, branch, year, contactNumber, rollNumber, hostel });

    // Save the user to the database
    await user.save();

    // Respond with success
    res.status(201).json({ message: 'Account created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
