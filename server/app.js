const express = require('express')
    , app = express()
    , passport = require('passport')
    , LocalStrategy = require('passport-local')
    , bodyParser = require('body-parser')
    , bcrypt = require('bcrypt')
    , User = require('./models/user.js')
    , mongoose = require('mongoose')

const users = require('./routes/users.js')
const articles = require('./routes/articles.js')

mongoose.connect('mongodb://localhost/live-code-final-nugraha', ()=>{
  console.log(`Connect to mongodb database`);
})

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, {msg: `username or password invalid`}); }
      if (!bcrypt.compareSync(password, user.password)) { return done(null, {msg: `password invalid`}); }
      return done(null, user);
    });
  }
));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/users', users)
app.use('/api/articles', articles)

app.listen(3000, ()=>{
  console.log(`Connect to port: 3000`);
})
