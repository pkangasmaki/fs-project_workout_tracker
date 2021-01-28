const express = require('express')
const router = express.Router()
const Workout = require('../models/Workout')
const Routine = require('../models/Routine')

// define the home page route
router.get('/', async (req, res) => {
  const allWorkouts = await Workout.find({})
  res.json(allWorkouts)
})

router.get('/:id', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id)
    if(!workout) return res.status(404).send('workout not found')
    res.send(workout)
  } catch (e) {
    return res.status(404).send('workout not found')
  }
})

router.put('/:id', async (req, res) => {
  if (!req.body.sets || !req.body.repetitions || !req.body.weight) return res.status(400).send('values missing')

  if (typeof req.body.sets !== 'number' || typeof req.body.repetitions !== 'number' || typeof req.body.weight !== 'number') return res.status(400).send('invalid values')

  const newData = {
    sets: req.body.sets,
    repetitions: req.body.repetitions,
    weight: req.body.weight
  }
  const workout = await Workout.findByIdAndUpdate(req.params.id, newData)
  res.send(workout)
})

//TO DO: authentication
router.delete('/:id', async (req, res) => {
  const workout = await Workout.findById(req.params.id)
  await Workout.deleteOne(workout)
  res.send(workout)
})

//TO DO:
router.post('/', async (req, res) => {

  const routine = await Routine.findById(req.body.routine)

  if(!routine) {
    res.send('Error identifying routine: incorrect id.')
  }

  /*
  const newWorkout = new Workout({
    exercise: req.body.exercise,
    sets: req.body.sets,
    repetitions: req.body.repetitions,
    weight: req.body.weight,
    routine: routine.id
  })
  */

  const newWorkout = new Workout({
    exercise: req.body.exercise,
    sets: 0,
    repetitions: 0,
    weight: 0,
    routine: routine.id
  })

  await newWorkout.save()

  routine.workouts = routine.workouts.concat(newWorkout.id)
  await routine.save()

  res.json(newWorkout)
})

module.exports = router