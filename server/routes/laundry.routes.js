// routes/signup.js

const express = require('express');
const { CreateLaundry, FetchNotDeliveredLaundry, DeliverLaundry } = require('../controllers/laundry.controller');
const router = express.Router();

router.post("/create",CreateLaundry)
// router.post("/fetch",FetchNotDeliveredLaundry)

// Add more routes as needed

module.exports = router;
