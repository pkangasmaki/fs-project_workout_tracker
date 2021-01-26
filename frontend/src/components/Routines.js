import React, { useState, useEffect } from 'react';
import Workout from '../components/Workout'

import routineService from '../services/routine'

const Routines = ({setRoutine, routine, routines}) => {

  const [workoutList, setWorkoutList] = useState([])

  const hook = () => {
    const getRoutine = async () => {
      const foundRoutine = await routineService.getRoutine(routine)
      setWorkoutList(foundRoutine.workouts)
    }
    if(routine) getRoutine()
  }

  useEffect(hook, [routine])

  //Set drop-down value to routine-state
  const handleSelection = async (e) => {
    setWorkoutList([])
    setRoutine(e.target.value)
  }

  const tableStyle = {
    "border": "1px solid black"
 };

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
      {routine && `Chosen routine: ${routines.find(e => e.id === routine).name}`}
    </div>
    <table style={tableStyle}>
    {workoutList.map(workout =>
        <tbody style={tableStyle} key={workout.id} >
          <Workout workout={workout} />
        </tbody>
    )}
    </table>
  </div>
  )
}

export default Routines
