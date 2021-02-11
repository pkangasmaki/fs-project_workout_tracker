import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Notification = ({ notification }) => {
  if(!notification) {
    return null
  }

  let color = 'info'

  if(notification.includes('added') || notification.includes('created')) color='success'
  if(notification.includes('deleted')) color='danger'
  if(notification.includes('edited')) color='warning'

  return (
    <Alert variant={color}>
      {notification}
    </Alert>
  )
}

export default Notification