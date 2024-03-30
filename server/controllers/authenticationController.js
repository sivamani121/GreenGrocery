const mongoose = require("mongoose");
const User = require("./../models/userModel");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/appError");
const { token } = require("morgan");
const { promisify } = require("util");
const { route } = require("../app");
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
exports.signup = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    mobileno: req.body.mobileno,
    Username: req.body.Username,
  });
  console.log(process.env.JWT_SECRET);

  const token = signToken(newUser._id);
  res.status(201).json({
    status: "success",
    token,
    data: {
      User: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("please provide email and password"), 400);
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("incorrect credentials", 401));
  }
  const token = signToken(user._id);
  console.log(token);
  res.status(200).json({
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  //1)getting token and check if its valid
  console.log(
    req.headers.authorization,
    req.headers.authorization.startsWith("Bearer")
  );
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    if (!token) {
      return next(new AppError("you are not logged in please login ", 401));
    }

    //2)verification token
    console.log(process.env.JWT_SECRET, token);
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    //3)check if user still exists
    const freshUser = await User.findById(decoded.id);
    if (!freshUser) {
      return next(
        new AppError(
          "the user belonging to this token does no longer exist.",
          401
        )
      );
    }
    //4) check if user changed password after the token issued
    if (freshUser.changedPasswordAfter(decoded.iat))
      return next(
        AppError("user password have been changed please login again ", 401)
      );

    //grant access to the next route
    req.user = freshUser;
    next();
  }
});
