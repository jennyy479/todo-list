const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {

})


router.get('/register', (req, res) => {
  res.render('register')
})



router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  // const name = req.body.name
  // const email = req.body.email
  // const password = req.body.password
  // const confirmPassword = req.body.confirmPassword

  User.findOne({ email }).then(user => {
    if (user) {
      console.log('User already exists.')
      res.render('register', {
        name,
        email,
        password,
        confirmPassword
      })
    } else {
      return User.create({
        name,
        email,
        password,
      })
        .then(() => res.render('/'))
        .catch(err => console.log(error))
    }
  })
})

module.exports = router