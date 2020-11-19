import React from 'react'
import Button from 'react-bootstrap/Button'

const Logout = ( {user, setUser} ) => {

  const handleLogout = () => {
    setUser('')
    console.log('logged out')
  }

  return(
    <div>
      {user} logged in
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Logout