let express = require("express");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect('mongodb+srv://admin:Omegapoint@cluster0-jtzfp.mongodb.net/BosseEvelyn?retryWrites=true');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

let articleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  product_name: String,
  price: String,
  Category: String
});

module.exports = mongoose.model('Article',articleSchema)
