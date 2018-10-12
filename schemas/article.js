"use strict";
let express = require("express");
let mongoose = require("mongoose");

let articleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  product_name: String,
  price: String,
  Category: String
});

module.exports = mongoose.model('Article',articleSchema)
