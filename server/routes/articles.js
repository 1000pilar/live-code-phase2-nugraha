const express = require('express')
const router = express.Router()
const articleControllers = require('../controllers/articles-cont.js')



router.get('/', articleControllers.all)
router.get('/:id', articleControllers.findById)
router.post('/', articleControllers.create)
router.put('/:id', articleControllers.update)
router.post('/', articleControllers.findByAuthor)
router.post('/', articleControllers.findByCategory)
router.delete('/:id', articleControllers.delete)


module.exports =  router
