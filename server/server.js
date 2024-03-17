const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
// require("dotenv").config();
const port = 3001; // or any other port you prefer
const DB =
  "mongodb+srv://sivamavi212:12siva@cluster0.cx4yrim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));

// app.get("/api/data", (req, res) => {
//   // Handle your API logic here
//   const data = { message: "Hello from the server!" };
//   res.json(data);
// });

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
