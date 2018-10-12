"use strict";
let express = require('express');
import database from '../DL/database.js';
const router = express.Router();

router.get('/articles', database.getArticles); //Callback för att hämta alla artiklar från databasen
router.get('/articles/:id', database.getArticleById); //Callback för att hämta en artikel från databasen
router.post('/articles', database.postArticle)//Callback för att posta en ny artikel till databasen
// router.post('/json', database.postJSON);//Callback för att post hela articles.json arrayen till databasen

export default router;
