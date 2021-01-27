/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/workout'

const editValues = async (id, newData) => {
  await axios.put(`${baseUrl}/${id}`, newData)
}

export default { editValues }