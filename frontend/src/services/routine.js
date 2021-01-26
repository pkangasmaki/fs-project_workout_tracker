/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/routines'

const getRoutine = async (id) => {
  const foundRoutine = await axios.get(`${baseUrl}/${id}`)
  return foundRoutine.data
}

const createRoutine = async (routine) => {
  const addedRoutine = await axios.post(baseUrl, routine)
  return addedRoutine.data
}

export default { createRoutine, getRoutine }