let json = require("../articles");

class ArticleFunctions {

  getAllArticles(req, res) {
    let articleArray = [];
    let limit = req.query.limit;
    let skip = req.query.skip;
    for(let i=skip; i<=limit; i++ ){
      json.map(article => {
        if(i== article.id) {
          return articleArray.push(article)
        }
      })
    }
    if (skip>0) {
      return res.status(200).send({
        success: 'true',
        message: 'Articles retrieved successfully',
        articles: articleArray
      })
    } else {
      return res.status(200).send({
        success: 'true',
        message: 'Articles retrieved successfully',
        articles: json
      })
    }
  }

  getSingleArticle(req, res) {
    const id = req.params.id;
    console.log(id)
    let findArticle = json.find(article => {
      return article.id == id;
    })
    if(findArticle) {
      return res.status(200).send({
        success: 'true',
        message: 'Article retrieved successfully',
        findArticle
      })
    }
    return res.status(404).send({
      success: 'false',
      message: 'Article does not exist'
    })
  }
}


const articleFunctions = new ArticleFunctions();
export default articleFunctions;
