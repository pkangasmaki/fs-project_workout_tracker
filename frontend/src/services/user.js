/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

const userList = async () => {
  const users = await axios.get(baseUrl)
  return users.data
}

const getUser = async (id) => {
  const foundUser = await axios.get(`${baseUrl}/${id}`)
  return foundUser.data
}

const signUp = async (userData) => {
  await axios.post(baseUrl, userData)
}

//To do: single user view : http://localhost:3001/api/users/:id

export default { userList, signUp, getUser }