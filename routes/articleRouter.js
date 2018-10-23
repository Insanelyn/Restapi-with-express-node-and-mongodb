"use strict";
// let json = require("../articles");
let express = require('express');
import mongo from '../datalayer/mongo.js'
const articleRouter = express.Router();
var cors = require('cors')



articleRouter.route('/', cors())
.get((req, res, next) => {
  let skip = Number(req.query.skip);
  let limit = Number(req.query.limit);
  let Category = req.query.category;
  let price = req.query.price;
  mongo.getArticles(skip, limit, price, Category)
    .then(articles => {
      res.status(200).json(articles)
  })
  .catch(() => {
    next()
  })
})
.post((req, res) => {
  let body;
  if(!req.body.product_name || '' && !req.body.price || '' && !req.body.Category || '') {
      res.status(403).send('Some field is empty')
  } else {
    body = {
      product_name: req.body.product_name,
      price: req.body.price,
      category: req.body.category.toLowerCase(),
      color: req.body.color,
      short_description: req.body.short_description,
      long_description: req.body.long_description,
      image: req.body.image,
    }
  }
  mongo.postArticle(body)
   .then(article => {
     res.status(201).json({
       message: 'Article Created',
       article
     })
   })
   .catch(() => {
     next()
   })
});



articleRouter.route('/:articleId')
.get((req, res) => {
  mongo.getArticleById(req, res);
})
.delete((req,res)=>{
  mongo.deleteArticle(req, res);
})
.patch((req,res)=>{
  mongo.patchArticle(req, res);
})
.put((req, res) => {
  mongo.putArticle(req, res);
})

articleRouter.route('/json')

export default articleRouter;
