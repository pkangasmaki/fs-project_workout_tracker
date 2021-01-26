/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/workout'

const addWorkout = async (workout, routine) => {
  const workoutObj = {
    exercise: workout,
    routine
  }
  await axios.post(baseUrl, workoutObj)
}

export default { addWorkout }