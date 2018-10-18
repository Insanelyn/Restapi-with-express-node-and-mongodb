"use strict";
let express = require("express");
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let articleSchema = new Schema({
  id: Number,
  product_name: String,
  price: String,
  Category: String
});

module.exports = mongoose.model('article', articleSchema)
