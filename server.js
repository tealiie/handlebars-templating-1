var express = require('express') //to bring in express
var hbs = require('express-handlebars') //to bring in handlebars
var path = require('path') //pathways to other files

var app = express() //application being used is express

var blogs = require('./blogs') //create path to access blogs.js file

app.engine('hbs', hbs ()) // hbs is a function
app.set('view engine', 'hbs')
app.set('views', path.join (__dirname, 'views'))

app.get('/', function (req,res) { //request and response
  res.render('index', blogs)
})

app.listen (3000, function () {
  console.log ('listening on port 3000')
})
