import React, { useState, useEffect } from 'react';
import Workout from '../components/Workout'
import Add from './Add'
import Table from 'react-bootstrap/Table'

import routineService from '../services/routine'

const Routines = ({setRoutine, routine, routines}) => {

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

  //Set drop-down value to routine-state
  const handleSelection = async (e) => {
    setRoutine(e.target.value)
    localStorage.removeItem('selectedRoutine');
    localStorage.setItem('selectedRoutine', e.target.value);
  }

  return (
    <div>
      <div>
      <select defaultValue={routine} name="routines" id="routines" onChange={handleSelection}>
        <option value='' disabled> select your routine </option>
        {routines.map(routine =>
          <option key={routine.id} value={routine.id}>{routine.name}</option>
        )}
      </select>
      </div>
    <div>
      {routine && routines.length !== 0 && `Chosen routine: ${routines.find(e => e.id === routine).name}`}
    </div>
    <Table style={{"width":"75%", "border":"none"}} striped hover variant="dark">
      <tbody>
        {workoutList.map((workout, index) =>
          <Workout key={workout.id} workout={workout} setUpdated={setUpdated} updated={updated} index={index} length={workoutList.length} />
        )}
      </tbody>
    </Table>
    {routine && 
      <Add routine={routine} setUpdated={setUpdated} updated={updated}/>
    }
  </div>
  )
}

export default Routines
