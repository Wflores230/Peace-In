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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  "mongodb+srv://WFlores230:Willisaboss135@cluster0.opoxj.mongodb.net/peace-in?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);


app.listen(PORT, console.log(`Server is starting at ${PORT}`));