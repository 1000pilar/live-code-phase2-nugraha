const mongoose = require('mongoose')
const Schema = mongoose.Schema


const articleSchema = new Schema({
  title: String,
  content: String,
  category: String,
  author: {type: Schema.Types.ObjectId, ref: 'User'},
})

const Articles = mongoose.model('Articles', articleSchema)

module.exports = Articles
