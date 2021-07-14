const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quotesSchema = new Schema({
  quote: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String
});

const Quotes = mongoose.model("Quotes", quotesSchema);

module.exports = Quotes;
