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
  //Check if values are undefined and not zero
  if (!req.body.sets && req.body.sets !== 0 || !req.body.repetitions && req.body.repetitions !== 0 || !req.body.weight && req.body.weight !== 0) {
    res.status(400).send('values missing')
  }

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
  const routine = await Routine.findById(workout.routine)

  // eslint-disable-next-line eqeqeq
  routine.workouts = routine.workouts.filter(e => e != workout.id)

  console.log(routine.workouts)
  await Workout.deleteOne(workout)
  await routine.save()
  res.send(workout)
})

router.post('/:id/moveup', async (req, res) => {
  const workout = await Workout.findById(req.params.id)
  const routine = await Routine.findById(workout.routine)

  const moveUp = (array, element) => {
    const index = array.indexOf(element)
    if(index !== 0) {
      array.splice(index, 1)
      array.splice(index-1, 0, element)
    }
  }

  moveUp(routine.workouts, workout.id)
  routine.save()
  res.send(workout)
})

router.post('/:id/movedown', async (req, res) => {
  const workout = await Workout.findById(req.params.id)
  const routine = await Routine.findById(workout.routine)

  const moveDown = (array, element) => {
    const index = array.indexOf(element)
    if(index !== array.length-1) {
      array.splice(index, 1)
      array.splice(index+1, 0, element)
    }
  }

  moveDown(routine.workouts, workout.id)
  routine.save()
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