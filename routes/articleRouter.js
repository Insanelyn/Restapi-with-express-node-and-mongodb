"use strict";
// let json = require("../articles");
let Article = require("../schemas/article.js");
let mongoose = require('mongoose');
let express = require('express');
import mongo from '../datalayer/mongo.js'
const articleRouter = express.Router();



articleRouter.route('/')
.get((req, res) => {
  mongo.getArticles(req, res);
})
.post((req, res) => {
  mongo.postArticle(req, res);
})

articleRouter.route('/:articleId')
.get((req, res) => {
  Article.findById(req.params.articleId, (err, article)=>{
    res.json(article)
  })
  // const id = req.params.articleId;
  // Article.findById(id)
  // .then(article => {
  //   if(id===true) {
  //     res.status(200).json(article)
  //   }else{
  //     return res.status(404).send({
  //       success: 'false',
  //       message: 'Article not found'
  //     });
  //   }}).catch(err => console.log('Errormessage: ', err))
})
.delete((req,res)=>{
  Article.findById(req.params.articleId, (err, article) => {
    article.remove(err => {
      if(err){
        res.status(500).send(err)
      }
      else{
        res.status(204).send('removed')
      }
    })
  })
})
.patch((req,res)=>{
     Article.findById(req.params.articleId, (err, article) => {
         if(req.body._id){
             delete req.body._id;
         }
         for( let b in req.body ){
             article[b] = req.body[b];
         }
         article.save();
         res.json(article);
     })
 })
.put((req, res) => {
   Article.findById(req.params.articleId, (err, article) => {
          article.product_name = req.body.product_name;
          article.price = req.body.price;
          article.save()
          res.json(article)
 })
})
export default articleRouter;

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
