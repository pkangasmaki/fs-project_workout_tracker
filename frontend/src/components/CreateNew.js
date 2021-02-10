import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

import routineService from '../services/routine'
import workoutService from '../services/workout'

const CreateNew = ( { user, setNotification }) => {

  const [newRoutine, setNewRoutine] = useState('')
  const [workout, setWorkout] = useState('')
  const [workouts, setWorkouts] = useState([])

  const margin = {
    margin: 5
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(newRoutine) {

      const routineObj = {
        name: newRoutine,
        user: user.id
      }

      const addedRoutine = await routineService.createRoutine(routineObj)

      let i
      for (i= 0; i < workouts.length; i++) {
        await workoutService.addWorkout(workouts[i], addedRoutine.id)
      }

      setNotification(`New routine "${newRoutine}" added`)

      setTimeout(() => {setNotification('')}, 3500);

      setNewRoutine('')
      setWorkouts([])
    } else {
      console.log('Error: name must contain at least 1 letter')
    }
  }

  const clearField = () => {
    setNewRoutine('')
    setWorkouts([])
    setWorkout('')
    console.log('Cleared routine name')
  }

  const addWorkout = () => {
    setWorkouts(workouts.concat(workout))
    setWorkout('')
  }

  return (
    <div>
      <h3>Create a new routine </h3>
      <form onSubmit={handleSubmit}>
        <div> 
        <input type='text' placeholder="Routine name" value={newRoutine || ''} onChange={event => setNewRoutine(event.target.value)} /></div>

        <div>
          <input
            placeholder="Workout name"
            value={workout}
            onChange={({ target }) => setWorkout(target.value)}
          />
          <Button onClick={addWorkout} type="button" variant="light" size="sm">add exercise*</Button>
        </div>
        <div>
          <i>{workouts.join(', ')}</i>
        </div>
        <div>
          <i style={{color: 'gray'}}>*note: you can modify weights and sets in home page</i>
        </div>

        <Button type='submit' variant="primary" style={margin}>Create </Button>
        <Button onClick={clearField} variant="outline-danger" style={margin}>Clear </Button>
      </form>
    </div>
  )
}

export default CreateNew