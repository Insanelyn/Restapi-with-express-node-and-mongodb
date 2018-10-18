"use strict";
import ArticleRouter from  './routes/articleRouter.js'
import bodyParser from 'body-parser';
let express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/articles', ArticleRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`)
});
