const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
    maxLength: [100, "Please enter product name"],
  },
  price: {
    type: Number,
    required: [true, "please enter product name"],
    maxLength: [100, "Please enter product name"],
    default: 0.0,
  },
  Description: {
    type: String,
    required: [true, "please enter product name"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numberOfRatings:{
    type:Number,
    default:0
  },
  quantity: {
    type: Number,
    default: 0,
  },
  images: [
    {
      url: {
        type: String, // Assuming the URL is stored as a string
        required: true // If the URL is mandatory
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter product Category"],
    values: ["fruits", "vegatables", "diary"],
    message: "please slect correct category for product",
  },
});

module.exports = mongoose.model("Product", productSchema);
