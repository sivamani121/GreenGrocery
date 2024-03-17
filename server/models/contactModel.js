const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
