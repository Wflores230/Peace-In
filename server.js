const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
// const passport = require("passport");
// const passportLocal = require("passport-local").Strategy;

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
// app.use(passport.initialize());
// app.use(passport.session());
// require("./passport")(passport);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/peace-in",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);


app.listen(PORT, console.log(`Server is starting at ${PORT}`));