// routes/signup.js

const express = require('express');
const { CreateLaundry, FetchNotDeliveredLaundry, FetchDeliveredLaundry, validateAndFetchND, DeleteLaundry, fetchLaundry } = require('../controllers/laundry.controller');
const router = express.Router();

router.post("/create",CreateLaundry)
router.get("/fetchND",FetchNotDeliveredLaundry)
router.get("/fetchD", FetchDeliveredLaundry)
router.get("/validate/:studId",validateAndFetchND)
router.patch("/delete/:laundryId",DeleteLaundry)
router.get("/fetch/:laundryId",fetchLaundry)

// Add more routes as needed

module.exports = router;
