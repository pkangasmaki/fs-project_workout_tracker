//Dependencies
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

//Models
const User = require('../models/User')

//Homepage route
router.get('/', async (req, res) => {
  const allUsers = await User.find({})
  res.json(allUsers)
})

//Post to homepage
router.post('/', async (req, res) => {
  //To do: Varmista että on annettu Käyttäjänimi, nimi ja salasana
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(req.body.password, saltRounds)
  const newUser = new User({
    username: req.body.username,
    name: req.body.name,
    password: passwordHash
  })

  const savedUser = await newUser.save()
  res.json(savedUser)
})

module.exports = router