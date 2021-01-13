/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

const userList = async () => {
  const users = await axios.get(baseUrl)
  return users.data
}

export default { userList }