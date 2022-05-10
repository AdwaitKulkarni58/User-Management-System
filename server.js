const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./server/database/connection");

const app = express();

dotenv.config({ path: "config.env" });

app.use(morgan("tiny"));

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));

app.use("/", require("./server/routes/router"));

app.listen(3000 || process.env.PORT, () => {
  console.log("Server started");
});
