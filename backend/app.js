require('dotenv').config()

//Dependencies
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

//Controllers
const usersRouter = require('./controllers/users')

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

module.exports = app