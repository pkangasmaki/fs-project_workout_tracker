import React from 'react'
import Button from 'react-bootstrap/Button'

const CreateNew = ( {newRoutine, setNewRoutine}) => {

  const margin = {
    margin: 5
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(e.target.value)
  }

  return (
    <div>
      <p>Create a new routine </p>
      <form onSubmit={handleSubmit}>
        <div> Routine name: <input type='text' value='asd' /></div>
        <Button type='submit' variant="primary" style={margin}>Create </Button>
        <Button variant="outline-danger" style={margin}>Clear </Button>
      </form>
    </div>
  )
}

export default CreateNew