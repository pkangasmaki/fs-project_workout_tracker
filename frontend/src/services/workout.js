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

const deleteWorkout = async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
}

const moveUp = async (id) => {
  await axios.post(`${baseUrl}/${id}/moveup`)
}

const moveDown = async (id) => {
  await axios.post(`${baseUrl}/${id}/movedown`)
}

export default { addWorkout, deleteWorkout, moveUp, moveDown }