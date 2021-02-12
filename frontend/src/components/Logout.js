import React from 'react'
import Button from 'react-bootstrap/Button'

const Logout = ({ user, setUser, setUserRoutines, setRoutine }) => {

  const handleLogout = () => {
    setUser('')
    setUserRoutines([])
    setRoutine('')
    localStorage.clear()
    console.log('logged out')
  }

  return(
    <div style={{float: "right", marginRight: 20, marginTop: 10}}>
      {user.name} logged in
      <Button size= "sm" variant="secondary" onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Logout