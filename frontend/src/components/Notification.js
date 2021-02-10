import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Notification = ({ notification }) => {
  if(!notification) {
    return null
  }

  return (
    <Alert variant='success'>
      {notification}
    </Alert>
  )
}

export default Notification