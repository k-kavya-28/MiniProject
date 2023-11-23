// routes/signup.js

const express = require('express');
const { CreateLaundary, FetchNotDeliveredLaundary } = require('../controllers/laundary.controller');
const router = express.Router();

router.post("/create",CreateLaundary).post("/fetch",FetchNotDeliveredLaundary)

// Add more routes as needed

module.exports = router;
