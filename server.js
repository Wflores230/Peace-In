const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/peace-in",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

app.use('/app', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));