const express = require('express')
const router = express.Router()
const Workout = require('../models/Workout')
const Routine = require('../models/Routine')

// define the home page route
router.get('/', async (req, res) => {
  const allWorkouts = await Workout.find({})
  res.json(allWorkouts)
})

router.post('/', async (req, res) => {

  const routine = await Routine.findById(req.body.routine)

  if(!routine) {
    res.send('Needs routine!')
  }

  const newWorkout = new Workout({
    exercise: req.body.exercise,
    sets: req.body.sets,
    reps: req.body.reps,
    weight: req.body.weight,
    routine: routine.id
  })
  await newWorkout.save()

  routine.workouts = routine.workouts.concat(newWorkout.id)
  await routine.save()

  res.json(newWorkout)
})

module.exports = router