"use strict";
let json = require("../articles");
import bodyParser from 'body-parser';
let Article = require("../models/article.js");
let mongoose = require('mongoose');
let express = require("express");
let db = require("../models/article.js");

class ArticleController {
  constructor(product_name, id, price, Category) {
  this.id = id;
  this.product_name = product_name;
  this.price = price;
  this.Category = Category;
}

  //Funktion för att hämta alla artiklar som är lagrade i databasen
  getArticles(req, res) {
    let limit = Number(req.query.limit);
    let skip = Number(req.query.skip);
    let Category = req.query.Category;
    let id = req.params._id;
    let print;
    if(Category){
      print = {'Category': Category}
    }else {
      print = Article.find()
    }
        console.log("hej", Category)
    Article.find().skip(skip).limit(limit).sort(id).where(print)
    .then(articles => {
      res.status(200).json(articles)
    })
    .catch(err => console.log('Errormessage: ', err))
  }
  //Funktion för att hämta en artikel som är lagrad i databasen
  getArticleById(req, res) {
    const id = req.params.id;
    Article.find({id})
    .then(article => {
      res.status(200).json(article)
    }).catch(err => console.log('Errormessage: ', err))
  }

  //Funktion för att posta nya artiklar till databasen
  postArticle(req, res) {
    let article = new Article({
      _id: mongoose.Types.ObjectId(),
      product_name: req.body.product_name,
      price: req.body.price,
      Category: req.body.Category
    })
    if(!req.body.product_name) {
      return res.status(400).send({
        success: 'false',
        message: 'An article name is required'
      });
    } else if(!req.body.price) {
      return res.status(400).send({
        success: 'false',
        message: 'Price is required'
      });
    }else if(!req.body.Category) {
      return res.status(400).send({
        success: 'false',
        message: 'Category is required'
      });
    }else {
      article.save()
      .then(item => {
        res.send({
          success: 'true',
          message: 'Article added successfully',
          article
        });
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
    }
  };
}

  const articleController = new ArticleController();
  export default articleController;




  //
  // //Funktion för att hämta alla artiklar som finns i json arrayen
  // getAllJSONArticles(req, res) {
  //   let articleArray = [];
  //   let limit = Number(req.query.limit);
  //   let skip = Number(req.query.skip);
  //   for(let i=skip; i<=limit; i++ ){
  //     json.map(article => {
  //       if(i== article.id) {
  //         return articleArray.push(article)
  //       }
  //     })
  //   }
  //   if (skip>0&&limit>0&&skip<=limit) {
  //     return res.status(200).send({
  //       success: 'true',
  //       message: 'Articles retrieved successfully',
  //       articles: articleArray
  //     })
  //   } else if (skip>limit) {
  //     return res.status(404).send({
  //       success: 'false',
  //       message: 'Requested amout of articles higher than requested max amount'
  //     })
  //   } else {
  //     return res.status(200).send({
  //       success: 'true',
  //       message: 'Articles retrieved successfully',
  //       articles: json
  //     })
  //   }
  // }
  // //Funktion för att hämta en artikel som finns i json arrayen
  // getSingleJSONArticle(req, res) {
  //   const id = req.params.id;
  //   console.log(id)
  //   let findArticle = json.find(article => {
  //     return article.id == id;
  //   })
  //   if(findArticle) {
  //     return res.status(200).send({
  //       success: 'true',
  //       message: 'Article retrieved successfully',
  //       findArticle
  //     })
  //   }
  //   return res.status(404).send({
  //     success: 'false',
  //     message: 'Article does not exist'
  //   })
  // }
  // //Funktion för att posta alla articles.json till databasen
  // postJSON(req, res){
  //   let article;
  //   json.forEach((article, res) => {
  //     article = new Article({
  //       _id: new mongoose.Types.ObjectId(),
  //       id: article.id,
  //       product_name: article.product_name,
  //       price: article.price,
  //       Category: article.Category
  //     })
  //     .save()
  //     .then(article => console.log(article))
  //     .catch(error => console.log('errormessage: ', error))
  //
  //   });
  // }
