/* import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button'
import EditRoutineTable from './EditRoutineTable'

import routineService from '../services/routine'

const EditRoutine = ({setRoutine, routine, routines}) => {

  const [workoutList, setWorkoutList] = useState([])
  const [updated, setUpdated] = useState(false)

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
  useEffect(hook, [routine, updated])

  const handleSelection = async (e) => {
    setRoutine(e.target.value)
    localStorage.removeItem('selectedRoutine');
    localStorage.setItem('selectedRoutine', e.target.value);
  }

  return (
    <div>
      <div>
      {routine && <h3>Edit your routines</h3>}
      {!routine && <h5>Start by choosing a routine below.</h5>}
      <div>
        {routines.map(routine =>
          <Button style={{paddingLeft: "4px"}} onClick={handleSelection} variant="light" key={routine.id} value={routine.id}>{routine.name}</Button>
        )}
      </div>
      </div>
    {routine && <EditRoutineTable routine={routine} setRoutine={setRoutine} routines={routines} workoutList={workoutList} updated={updated} setUpdated={setUpdated} />}
  </div>
  )
}

export default EditRoutine
 */