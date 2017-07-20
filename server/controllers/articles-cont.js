const Article = require('../models/article.js')


module.exports = {
  create: (req, res)=>{
    const articleCreate = new Article({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.user_id
    })

    articleCreate.save((err, article)=>{
      if(!err){
        res.send(article)
      } else {
        res.send(err)
      }
    })
  },

  all: (req, res)=>{
    Article.find((err, articles)=>{
      if(!err){
        res.send(articles)
      } else {
        res.send(err)
      }
    })
  },

  findById: (req, res)=>{
    Article.findById({_id: req.params.id}, (err, article)=>{
      if(!err){
        res.send(article)
      } else {
        res.send(err)
      }
    })
  },

  findByCategory: (req, res)=>{
    Article.find({category: req.body.category}, (err, articles)=>{
      if(!err){
        res.send(articles)
      } else {
        res.send(err)
      }
    })
  },

  findByAuthor: (req, res)=>{
    Article.find({user_id: req.body.user_id}, (err, articles)=>{
      if(!err){
        res.send(articles)
      } else {
        res.send(err)
      }
    })
  },

  update: (req, res)=>{
    Article.findOne({_id: req.params.id}, (err, article)=>{
      if(!err){
        const updateArticle = {
          title: req.body.title || article.title,
          content: req.body.content || article.content,
          category: req.body.category || article.category,
          author: req.body.user_id || article.author
        }
        Article.update({_id: req.params.id}, {$set: updateArticle},
          {new: true}, (err, article)=>{
          if(!err){
            res.send(article)
          } else {
            res.send(err)
          }
        })
      } else {
        res.send(err)
      }
    })
  },

  delete: (req, res)=>{
    Article.remove({_id: req.params.id}, (err, article)=>{
      if(!err){
        res.send(article)
      } else {
        res.send(err)
      }
    })
  }

}
