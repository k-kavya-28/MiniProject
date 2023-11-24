const mongoose = require("mongoose");

const laundryStaffSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  }
});

const LaundryStaff = mongoose.model("LaundryStaff", laundryStaffSchema);

module.exports = LaundryStaff;
