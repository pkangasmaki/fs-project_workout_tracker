import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import routineService from '../services/routine'
import Button from 'react-bootstrap/Button'

const Routines = ({setRoutine, routine, routines}) => {

  const [workoutList, setWorkoutList] = useState([])

  const hook = () => {
    const getRoutine = async () => {
      const foundRoutine = await routineService.getRoutine(routine)
      setWorkoutList(foundRoutine.workouts)
    }
    if(routine) getRoutine()
  }

  const storageHook = () => {

    const getRoutine = async (storageRoutine) => {
      const foundRoutine = await routineService.getRoutine(storageRoutine)
      setRoutine(storageRoutine)
      setWorkoutList(foundRoutine.workouts)
    }

    const storageRoutine = localStorage.getItem('selectedRoutine')
    if (storageRoutine) {
      getRoutine(storageRoutine)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(storageHook, [])
  useEffect(hook, [routine])

  //Set drop-down value to routine-state
  const handleSelection = async (e) => {
    setRoutine(e.target.value)
    localStorage.removeItem('selectedRoutine');
    localStorage.setItem('selectedRoutine', e.target.value);
  }

  return (
    <div>
      <div>
        {routines.map(routine =>
          <Button onClick={handleSelection} variant="link" key={routine.id} value={routine.id}>{routine.name}</Button>
        )}
      </div>
    {!routine && <div>Start by choosing a routine!</div>}
    {routine && <Table style={{"width":"55%"}} striped bordered hover>
      <thead>
        <tr>
          <td>
          {routine && routines.length !== 0 && `Chosen routine: ${routines.find(e => e.id === routine).name}`}
          </td>
        </tr>
        <tr>
          <td>
            <b>Exercise</b>
          </td>
          <td>
            <b>Sets</b>
          </td>
          <td>
            <b>Weight</b> 
          </td>
        </tr>

      </thead>
      <tbody>
        {workoutList.map((workout) =>
          <tr id={workout.id}>
            <td> {workout.exercise} </td>
            <td>{workout.sets}x{workout.repetitions}</td>
            <td>{workout.weight}kg</td>
          </tr>
        )}
      </tbody>
    </Table>}
  </div>
  )
}

export default Routines
