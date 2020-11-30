const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  password: String
})

module.exports = mongoose.model('User', userSchema)