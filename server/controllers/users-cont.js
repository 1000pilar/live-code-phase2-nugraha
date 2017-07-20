const User = require('../models/user.js')
    , bcrypt = require('bcrypt')
    , jwt = require('jsonwebtoken')

module.exports = {
  signup: (req, res)=>{
    const userCreate = new User({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10)
    })

    userCreate.save((err, user)=>{
      if(!err){
        res.send(user)
      } else {
        res.send(err)
      }
    })
  },

  signin: (req, res)=>{
    const user = req.user
    if(user.hasOwnProperty('msg')){
      res.send(user)
    } else {
      var token = jwt.sign({
        id: user._id,
        username: user.username
      }, 'rahasia',
      { expiresIn: '1h' }, (err, token)=>{
        if(!err){
          jwt.verify(token, 'rahasia', (err, decoded)=>{
            if(!err){
              res.send({
                token: token,
                id: decoded.id,
                username: decoded.username
              })
            } else {
              res.send({msg: `somthingwrong with token`})
            }
          })
        } else {
          res.send(err)
        }
      })
    }
  }
}
