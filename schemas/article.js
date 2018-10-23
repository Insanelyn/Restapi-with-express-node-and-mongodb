"use strict";
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let articleSchema = new Schema({
  id: Number,
  product_name: String,
  price: String,
  color: String,
  category: String,
  short_description: String,
  long_description: String,
  image: String

});

module.exports = mongoose.model('article', articleSchema)
