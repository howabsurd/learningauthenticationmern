const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose
  .connect("url", {
    useNewUrlParser: true,
    findAndModify: true,
    useUnifiedTopology: false,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected "));

const authRoutes = require("./routes/auth.js");

//middleware
app.use("/api", authRoutes);

//app middleware

app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `http:localhost:3000` }));
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Port is running at ${PORT}`);
});
