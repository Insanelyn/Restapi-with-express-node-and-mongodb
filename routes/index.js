"use strict";
let express = require('express');
import articleController from '../controller/articleController.js';
const router = express.Router();

router.get('/articles', articleController.getArticles); //Callback för att hämta alla artiklar från databasen
router.get('/articles/Category/:Category', articleController.getArticleByCategory); //Callback för att hämta en artikel från databasen
router.get('/articles/:id', articleController.getArticleById); //Callback för att hämta en artikel från databasen
router.post('/articles', articleController.postArticle)//Callback för att posta en ny artikel till databasen
router.post('/json', articleController.postJSON);//Callback för att post hela articles.json arrayen till databasen

export default router;
