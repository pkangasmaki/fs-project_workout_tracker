const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
  exercise: String,
  sets: Number,
  reps: Number,
  weight: Number,
  routine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Routine'
  },
})

workoutSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

module.exports = mongoose.model('Workout', workoutSchema)