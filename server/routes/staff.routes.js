const express = require('express');
const { SignUpController, SignInController, fetchData } = require('../controllers/laundry.staff');
const router = express.Router();

router.post("/signup",SignUpController)
router.post("/signin",SignInController)
router.get("/fetch",fetchData)

module.exports = router;