// routes/signup.js

const express = require('express');
const { SignUpController, SignInController } = require('../controllers/user.controller');
const router = express.Router();

router.post("/signup",SignUpController)
router.post("/signin",SignInController)

// Add more routes as needed

module.exports = router;
