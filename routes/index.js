const express = require('express')

const router = express.Router()

const home = require('./modules/home')

const todos = require('./modules/todos')

const users = require('./modules/users')

router.use('/', home)

router.use('/todos', todos)

router.use('/users', users)
module.exports = router

// 引入 todos 模組程式碼

// 將網址結構符合 /todos 字串開頭的 request 導向 todos 模組 

