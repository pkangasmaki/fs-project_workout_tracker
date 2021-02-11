import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button'
import RoutineTable from './RoutineTable'
import EditRoutineTable from './EditRoutineTable'

import routineService from '../services/routine'

const Routines = ({setRoutine, routine, routines, setNotification}) => {

  const [workoutList, setWorkoutList] = useState([])
  const [updated, setUpdated] = useState(false)
  const [view, setView] = useState('routine')

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

  const handleClick = async (e) => {
    setRoutine(e.target.value)
    localStorage.removeItem('selectedRoutine');
    localStorage.setItem('selectedRoutine', e.target.value);
  }

  return (
    <div>
      {routine && view === 'routine' && 
      <div>
        <h3>
          Your routines 
          <Button variant='link' onClick={() => setView('edit')}> Switch to edit view </Button>
        </h3>
      </div>}
      {routine && view === 'edit' && 
      <div>
        <h3>
          Edit your routines
          <Button variant='link' onClick={() => setView('routine')}> Exit edit view </Button>
        </h3>
      </div>}
      {!routine && <h5>Start by choosing a routine below.</h5>}
      <div>
        {routines.map(routine =>
          <Button style={{paddingLeft: "4px"}} onClick={handleClick} variant="light" key={routine.id} value={routine.id}>{routine.name}</Button>
        )}
      </div>
    {routine && view === 'routine' && <RoutineTable routine={routine} routines={routines} workoutList={workoutList} />}
    {routine && view === 'edit' && <EditRoutineTable setNotification={setNotification} routine={routine} setRoutine={setRoutine} routines={routines} workoutList={workoutList} updated={updated} setUpdated={setUpdated} />}
  </div>
  )
}

export default Routines
