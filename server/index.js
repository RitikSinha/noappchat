const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = express.Router();
dotenv.config();

// importing all the routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middlewares
app.use(express.json());

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("app is running!");
});

app.listen(8800, () => {
  console.log("Backend server is running!");
});
