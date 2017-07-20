const express = require('express')
const router = express.Router()
const passport = require('passport')
const userControllers = require('../controllers/users-cont.js')



router.post('/signup', userControllers.signup)
router.post('/signin', passport.authenticate('local', { session: false }), userControllers.signin)

module.exports =  router
