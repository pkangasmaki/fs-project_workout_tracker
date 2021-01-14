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

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('routines', { name: 1 })
    if(!user) return res.status(404).send('user not found')
    res.send(user)
  } catch (e) {
    return res.status(404).send('user not found')
  }
})

//Post to homepage
router.post('/', async (req, res) => {
  if (!req.body.username) res.status(400).end('Username is required.')
  else if (!req.body.name) res.status(400).end('Name is required.')
  else if (!req.body.password) res.status(400).end('Password is required.')
  else {
    try {

      const allUsers = await User.find({})

      let taken = false
      Object.keys(allUsers).forEach( (key) => {
        if (allUsers[key].username === req.body.username) {
          taken = true
        }
      })

      if(!taken) {
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(req.body.password, saltRounds)
        const newUser = new User({
          username: req.body.username,
          name: req.body.name,
          password: passwordHash
        })

        const savedUser = await newUser.save()
        res.json(savedUser)
      } else res.status(400).end('Username taken.')

    } catch (e) {
      res.status(400).end('Sign-up error, try again later.')
    }
  }
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