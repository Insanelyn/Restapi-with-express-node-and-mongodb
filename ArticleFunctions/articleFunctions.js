let json = require("../articles");
import bodyParser from 'body-parser';
let art = require("../models/articleModels");
let mongoose = require('mongoose');
let express = require("express");
// import {articleSchema} from '../models/articleModels'
// import {article} from '../models/articleModels'





class ArticleFunctions {


  getAllArticles(req, res) {
    let articleArray = [];
    let limit = Number(req.query.limit);
    let skip = Number(req.query.skip);
    for(let i=skip; i<=limit; i++ ){
      json.map(article => {
        if(i== article.id) {
          return articleArray.push(article)
        }
      })
    }
    if (skip>0&&limit>0&&skip<=limit) {
      return res.status(200).send({
        success: 'true',
        message: 'Articles retrieved successfully',
        articles: articleArray
      })
    } else if (skip>limit) {
      return res.status(404).send({
        success: 'false',
        message: 'Requested amout of articles higher than requested max amount'
      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'Articles retrieved successfully',
        articles: json
      })
    }
  }

  postArticle(req, res) {
    if(!req.body.product_name) {
      return res.status(400).send({
        success: 'false',
        message: 'A product name is required'
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
    }
    let article = new art ({
      _id: mongoose.Types.ObjectId(),
      id: json.length+1,
      product_name: req.body.product_name,
      price: req.body.price,
      Category: req.body.Category
    })
    json.push(article);
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
  };

  getSingleArticle(req, res) {
    const id = req.params.id;
    console.log(id)
    let findArticle = json.find(article => {
      return article.id == id;
    })
    if(findArticle) {
      return res.status(200).send({
        success: 'true',
        message: 'Article retrieved successfully',
        findArticle
      })
    }
    return res.status(404).send({
      success: 'false',
      message: 'Article does not exist'
    })
  }
}




const articleFunctions = new ArticleFunctions();
export default articleFunctions;
