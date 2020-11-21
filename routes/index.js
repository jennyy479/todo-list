const express = require('express')

const router = express.Router()

const home = require('./modules/home')

const todos = require('./modules/todos')

router.use('/', home)

router.use('/todos', todos)
module.exports = router

// 引入 todos 模組程式碼

// 將網址結構符合 /todos 字串開頭的 request 導向 todos 模組 

