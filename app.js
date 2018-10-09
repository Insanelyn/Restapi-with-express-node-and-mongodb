"use strict";
let express = require("express");
import bodyParser from 'body-parser';
import articleSchema from './models/article'
import router from './routes/index.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const port = 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
