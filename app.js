const express = require('express')
const mongoose = require('mongoose')
const app = express()
const exphbs = require('express-handlebars')

const Todo = require('./models/todo')

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  //拿到全部todo
  Todo.find()
    .lean()
    .then(todos => res.render('index', { todos }))
    .catch(error => console.log(error))
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000/')
})