const express = require('express')

const router = express.Router()

const Todo = require('../../models/todo')

router.get('/', (req, res) => {
  //拿到全部todo
  Todo.find()
    .lean()
    .sort({ _id: 'asc' }) //desc反序
    .then(todos => res.render('index', { todos }))
    .catch(error => console.log(error))
})

module.exports = router