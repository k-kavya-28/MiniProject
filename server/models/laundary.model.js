const mongoose = require('mongoose');

const clothData = new mongoose.Schema({
    quantity:{
        type:Number,
        default:0
    },
    remark:{
        type:String
    }
  })

const laundarySchema = new mongoose.Schema({
  customerID: {
    type: String,
    required: true,
  },
  giveDate: {
    type: String
  },
  Shirt: clothData,
  Pant:clothData,
  Jacket:clothData,
  Kurta:clothData,
  Pajama: clothData,
  Skirt:clothData,
  Turban:clothData,
  Jean:clothData,
  Tshirt:clothData,
  Shorts:clothData,
  status:{
    type:String,
    enum:["picked","notpicked"],
    default:"notpicked"
  }
});

const LaundaryModel = mongoose.model('LaundaryModel', laundarySchema);

module.exports = LaundaryModel;
