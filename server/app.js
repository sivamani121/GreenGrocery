const express = require("express");

const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const userRouter = require("./Routes/userRoutes");
const ProductRouter = require("./Routes/ProductsRoutes");
const AppError = require("./utils/appError");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(helmet());
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use("/api", limiter);
app.use("/user", userRouter);
app.use("/product", ProductRouter);
app.use(bodyParser.json());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());
module.exports = app;
