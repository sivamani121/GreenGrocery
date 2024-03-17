const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Username: {
    type: String,
    minLength: [6, "length of username must be greater than 3"],
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    Selection: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  mobileno:{
    type:String,
    required:true,
    unique:true,
  },
  passwordChanged: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTtimestamp) {
  if (this.passwordChanged) {
    const changedtstamp = parseInt(this.passwordChanged.getTime() / 100);
    // console(changedtstamp,JWTTtimestamp);
    return JWTTtimestamp < changedtstamp;
  }
  return false;
};
const User = mongoose.model("User", userSchema);
module.exports = User;
