import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

const Login = ( {setUser} ) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Loggin in => Username:', username, ', Password:', password)
    setUser(username)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div><input onChange={(e) => setUsername(e.target.value)} /></div>
        <div><input onChange={(e) => setPassword(e.target.value)} /></div>
        <Button type='submit'> Login </Button>
      </form>
    </div>
  )
}

export default Login