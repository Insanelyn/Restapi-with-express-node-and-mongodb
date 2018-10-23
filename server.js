"use strict";
import ArticleRouter from  './routes/articleRouter.js'
import bodyParser from 'body-parser';
let express = require("express");
const app = express();
var cors = require('cors')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});
app.use('/articles', ArticleRouter);


const port = 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`)
});
