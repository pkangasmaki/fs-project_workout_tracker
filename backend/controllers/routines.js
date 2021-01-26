const express = require('express')
const Routine = require('../models/Routine')
const Workout = require('../models/Workout')
const User = require('../models/User')
const router = express.Router()

router.get('/', async (req,res) => {
  const allRoutines = await Routine.find({}).populate('workouts')
  res.json(allRoutines)
})

router.get('/:id', async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id).populate('workouts').populate('user', { name: 1 })
    if(!routine) return res.status(404).send('routine not found')
    res.send(routine)
  } catch (e) {
    return res.status(404).send('routine not found')
  }
})

router.get('/:id/workouts/:workout_id', async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id)
    if(!routine) return res.status(404).send('routine not found')

    const workout = await Workout.findById(req.params.workout_id)
    res.json(workout)

  } catch (e) {
    return res.status(404).send('routine not found')
  }
})

router.get('/:id/workouts', async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id)
    if(!routine) return res.status(404).send('routine not found')

    const allWorkouts = await Workout.find({ routine: req.params.id })
    res.json(allWorkouts)

  } catch (e) {
    return res.status(404).send('routine not found')
  }
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