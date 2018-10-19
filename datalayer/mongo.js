"use strict"
let mongoose = require("mongoose");
let Article = require("../schemas/article.js");
let articleSchema = require('mongoose').model('article').schema;

class mongo {
  constructor(){
    this._loadSchema();
    this._connect();
  }

  _loadSchema(){
    this._articleSchema = mongoose.model('article', articleSchema)
  }

  _connect(){
    mongoose.connect('mongodb+srv://admin:Omegapoint@cluster0-jtzfp.mongodb.net/BosseEvelyn?retryWrites=true');
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    })
    .then(console.log('Connected to MongoDB'))
    .catch(err => console.log(err))
  }
  getArticles(skip, limit, price, Category) {
    return Article.find()
      .select('_id product_name price Category')
      .sort(price ? { price: price } : { _id: 1 })
      .skip(skip)
      .limit(limit)
      .where(Category ? Article.find({ 'Category': Category }) : Article.find())
  }
  postArticle(req, res) {
    return new Article({
      }).save()
}
  getArticleById(articleId) {
    console.log(articleId)
    return Article.findById(articleId)
        .select('_id product_name price Category')
  }
//   deleteArticle(articleId){
//     Article.findById(req.params.articleId).then(article => {
//       article.remove()
//       res.status(200).json(article);
//     }).catch(err => console.log('Errormessage: ', err));
//   }
//
//   patchArticle(req,res){
//     Article.findById(req.params.articleId, (err, article) => {
//       for( let a in req.body ){
//         article[a] = req.body[a];
//       }
//       article.save();
//       res.json(article);
//     })
//   }
//
//   putArticle(req, res) {
//     Article.findById(req.params.articleId, (err, article) => {
//       article.product_name = req.body.product_name;
//       article.price = req.body.price;
//       article.save()
//       res.json(article)
//     })
//   }
 }

const database = new mongo();
export default database;
