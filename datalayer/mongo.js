"use strict"
let mongoose = require("mongoose");
let articleSchema = require('mongoose').model('article').schema;

class mongo {
  constructor(){
    this._loadSchema();
    this.connect();
  }

  _loadSchema(){
    this._Article = mongoose.model('article', articleSchema)
  }

  connect(){
    mongoose.connect('mongodb+srv://admin:Omegapoint@cluster0-jtzfp.mongodb.net/BosseEvelyn?retryWrites=true');
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    });
    console.log("Connected to mongodb")
  }
}

const database = new mongo();
export default database;
