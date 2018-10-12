"use strict";
let express = require("express");
let mongoose = require("mongoose");
//Schema som sätter formen för data till databasen
let articleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  product_name: String,
  price: String,
  Category: String
});
//Exporterar articleSchema så att datbase.js kan nå det
module.exports = mongoose.model('Article',articleSchema)
