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
    this._Article = mongoose.model('article', articleSchema)
  }

  _connect(){
    mongoose.connect('mongodb+srv://admin:Omegapoint@cluster0-jtzfp.mongodb.net/BosseEvelyn?retryWrites=true');
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    });
    console.log("Connected to mongodb")
  }

  getArticles(req, res) {
    let limit = Number(req.query.limit);
    let skip = Number(req.query.skip);
    let Category = req.query.Category;
    let id = req.params._id;
    let print;
    if(Category){
      print = {'Category': Category}
    }else {
      print = Article.find();
    }
    Article.find().skip(skip).limit(limit).sort(id).where(print)
    .then(articles => {
      res.status(200).json(articles);
    })
    .catch(err => console.log('Errormessage: ', err));
  }
  postArticle(req, res) {
    let article = new Article(req.body); // edited line
    article.save()
    res.status(201).send(article)
  }
}

const database = new mongo();
export default database;
