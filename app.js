"use strict";
let express = require("express");
import bodyParser from 'body-parser';
import router from './routes/articles.js';
import database from './DL/database.js'

const app = express();

database.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
const port = 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
