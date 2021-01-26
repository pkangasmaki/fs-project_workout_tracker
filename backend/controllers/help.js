const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const helpObj = {
    users: 'http://localhost:3001/api/users',
    single_user: 'http://localhost:3001/api/users/5fc62d96f23b6f1ae8a2400d',
    routines: 'http://localhost:3001/api/routines',
    single_routine: 'http://localhost:3001/api/routines/5fc62dc2f23b6f1ae8a2400e',
    workouts_of_routine: 'http://localhost:3001/api/routines/5fc62dc2f23b6f1ae8a2400e/workouts',
    single_workout: 'http://localhost:3001/api/routines/5fc62dc2f23b6f1ae8a2400e/workouts/5fc62dedf23b6f1ae8a2400f'
  }
  res.send(helpObj)
})

module.exports = router