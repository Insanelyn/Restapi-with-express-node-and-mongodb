let express = require('express');
const paginate = require('express-paginate');
import articleFunctions from '../ArticleFunctions/articleFunctions.js';


const router = express.Router();


router.get('/articles', articleFunctions.getAllArticles);
router.get('/articles/:id', articleFunctions.getSingleArticle);
export default router;
