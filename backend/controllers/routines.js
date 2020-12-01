const express = require('express')
const Routine = require('../models/Routine')
const User = require('../models/User')
const router = express.Router()

router.get('/', async (req,res) => {
  const allRoutines = await Routine.find({}).populate('workouts')
  res.json(allRoutines)
})

router.post('/', async (req,res) => {

  //Find the correct user to add him as an owner to the routine
  const user = await User.findById(req.body.user)
  if(!user) {
    res.send('needs user!')
  }

  const newRoutine = new Routine ({
    name: req.body.name,
    user: user.id
  })

  await newRoutine.save()

  //Add new routine to the users routine-array
  user.routines = user.routines.concat(newRoutine.id)
  await user.save()

  res.json(newRoutine)
})

module.exports = router