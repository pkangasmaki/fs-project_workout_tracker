import React from 'react'
import Button from 'react-bootstrap/Button'

const Logout = ( {user, setUser} ) => {

  const handleLogout = () => {
    setUser('')
    localStorage.clear();
    console.log('logged out')
  }

  return(
    <div>
      {user.name} logged in
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Logout