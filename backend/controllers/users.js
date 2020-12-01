//Dependencies
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

//Models
const User = require('../models/User')

//Homepage route
router.get('/', async (req, res) => {
  const allUsers = await User.find({}).populate('routines', { workouts: 1, name: 1 })
  res.json(allUsers)
})

//Post to homepage
router.post('/', async (req, res) => {
  //TO DO: Varmista että on annettu Käyttäjänimi, nimi ja salasana
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

/* TO DO:
//Change existing password
router.put('/:id', (req, res) => {
  const currentUser = {
    place: 'holder'
  }

  const newPassword = req.body.newPassword

  const updatedUser = {
    ...currentUser,
    password: newPassword
  }
  res.json(updatedUser)
})
*/

module.exports = router