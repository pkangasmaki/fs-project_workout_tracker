require('dotenv').config()

//Dependencies
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

//Controllers
const usersRouter = require('./controllers/users')
const routinesRouter = require('./controllers/routines')
const workoutRouter = require('./controllers/workout')
const loginRouter = require('./controllers/login')
const helpRouter = require('./controllers/help')

const app = express()

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.log(`Connected to ${process.env.MONGODB_URI}`)
}).catch(err => {
  console.log(`Db connection error: ${err.message}`)
})

app.use(cors())
app.use(express.json())

//Routes
app.use('/api/users', usersRouter)
app.use('/api/routines', routinesRouter)
app.use('/api/workout', workoutRouter)
app.use('/api/login', loginRouter)
app.use('/api/help', helpRouter)

module.exports = app