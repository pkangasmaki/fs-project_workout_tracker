const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const port = 3001

/*
  Routineihin voi POSTaa rutiineja joille annetaan:
  nimi
  haluttu määrä workout olioita

  Routineihin voi PUTtaa uuden nimen tai uuden workout olion: { exercise, sets, reps, weight }
  --> päivittää haluttuun

  Routeista voi deletee koko routine olion tai yksittäisiä workoutteja
*/

//Mock database
const users = [
  {
    username: 'Joonatan',
    name: 'Joonatan Sievinen',
    password: 'Joonatan',
    routine: [
      {
        name: 'push',
        workout: [
          {
            exercise: 'Bench press',
            sets: 4,
            reps: 6,
            weight: 100
          },
          {
            exercise: 'Overhead press',
            sets: 3,
            reps: 8,
            weight: 60
          }
        ]
      },
      {
        name: 'pull',
        workout: [
          {
            exercise: 'Deadlift',
            sets: 5,
            reps: 4,
            weight: 250
          },
          {
            exercise: 'Seated row',
            sets: 3,
            reps: 8,
            weight: 57
          }
        ]
      }
    ]
  },
  {
    username: 'Jiri',
    name: 'Jiri Viitamäki',
    routine: [
    ]
  }
]

app.use(express.json())

app.get('/api/users', (req, res) => {
  res.json(users)
})

app.listen(port, () => {
  console.log(`App listening at hppt://localhost:${port}`)
})