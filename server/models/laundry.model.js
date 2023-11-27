const mongoose = require("mongoose");

const clothData = new mongoose.Schema({
  quantity: {
    type: Number,
    default: 0,
  },
  remark: {
    type: String,
    default: "",
  },
});

const laundrySchema = new mongoose.Schema({
  customerID: {
    type: String,
    required: true,
  },
  giveDate: {
    type: String,
  },
  Shirt: clothData,
  Pant: clothData,
  Jacket: clothData,
  Kurta: clothData,
  Pajama: clothData,
  Skirt: clothData,
  Turban: clothData,
  Jean: clothData,
  Tshirt: clothData,
  Shorts: clothData,
  totalQuantity: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["picked", "notpicked"],
    default: "notpicked",
  },
});

const LaundryModel = mongoose.model("LaundryModel", laundrySchema);

module.exports = LaundryModel;
