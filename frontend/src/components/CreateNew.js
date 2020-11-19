import React from 'react'
import Button from 'react-bootstrap/Button'

const CreateNew = ( {newRoutine, setNewRoutine}) => {

  const margin = {
    margin: 5
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(newRoutine) {
      console.log('You created new routine:', newRoutine)
    } else {
      console.log('Error: name must contain at least 1 letter')
    }
  }

  const clearField = () => {
    setNewRoutine('')
    console.log('Cleared routine name')
  }

  return (
    <div>
      <p>Create a new routine </p>
      <form onSubmit={handleSubmit}>
        <div> 
        Routine name: 
        <input type='text' value={newRoutine || ''} onChange={event => setNewRoutine(event.target.value)} /></div>
        <Button type='submit' variant="primary" style={margin}>Create </Button>
        <Button onClick={clearField} variant="outline-danger" style={margin}>Clear </Button>
      </form>
    </div>
  )
}

export default CreateNew