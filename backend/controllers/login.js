const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', async (req, res) => {
  if(!req.body.username || !req.body.password) return res.status(401).send('Missing username or password.')

  const user = await User.findOne({ username: req.body.username })

  const correctPassword = user === null
    ? false
    : await bcrypt.compare(req.body.password, user.password)

  if(!user || !correctPassword) return res.status(401).send('invalid username or password')

  const userForSign = {
    username: user.username,
    id: user._id
  }

  const token = jwt.sign(userForSign, process.env.SECRET)

  const signedUser = {
    username: user.username,
    name: user.name,
    id: user._id,
    token
  }

  res.status(200).send(signedUser)
})

module.exports = router