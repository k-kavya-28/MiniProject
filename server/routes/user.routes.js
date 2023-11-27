// routes/signup.js

const express = require('express');
const { SignUpController, SignInController, fetchData, changePassword } = require('../controllers/user.controller');
const router = express.Router();

router.post("/signup",SignUpController)
router.post("/signin",SignInController)
router.get("/fetch",fetchData)
router.post("/changePassword",changePassword)

module.exports = router;
