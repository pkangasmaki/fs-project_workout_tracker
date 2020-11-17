const express = require('express')

const app = express()
const port = 3001

const users = [
  {
    username: 'Joonatan',
    name: 'Joonatan Sievinen'
  },
  {
    username: 'Jiri',
    name: 'Jiri Viitamäki'
  }
]

app.use(express.json())

app.get('/', (req, res) => {
  res.json(users)
})

app.listen(port, () => {
  console.log(`App listening at hppt://localhost:${port}`)
})