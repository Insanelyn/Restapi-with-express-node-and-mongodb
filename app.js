import router from './routes/index.js';
let express = require("express");
let models = require("./models/articleModels");
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);


const port = 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

/*
if ('development' == app.get('env')) {
app.use(express.errorhandler());
mongoose.connect('mongodb://55.55.55.5/mongo')
}
mongoose.model('users', {name: String})
*/
