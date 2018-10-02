let mongoose = require('mongoose');
let express = require("express");


mongoose.connect('mongodb+srv://admin:Omegapoint@cluster0-jtzfp.mongodb.net/BosseEvelyn?retryWrites=true');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

let articleSchema = new mongoose.Schema({
  id: {
    type: 'Number'
  },
  product_name: {
    type: 'String'
  },
  price: {
    type: 'String'
  },
  Category: {
    type: 'String'
  }

});


let Article = mongoose.model('Article', articleSchema);


Article.find(function (err, articles) {
  if (err) return console.error(err);
  console.log(articles);
})
