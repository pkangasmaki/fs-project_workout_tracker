import React, { useState, useEffect } from 'react';
import Workout from './Workout'
import Add from './Add'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
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

  /* DROP DOWN VARIANT

    <select defaultValue={routine} name="routines" id="routines" onChange={handleSelection}>
    <option value='' disabled> select your routine </option>
    {routines.map(routine =>
      <option key={routine.id} value={routine.id}>{routine.name}</option>
    )}
  </select>


  //Set drop-down value to routine-state
  const handleSelection = async (e) => {
    setRoutine(e.target.value)
    localStorage.removeItem('selectedRoutine');
    localStorage.setItem('selectedRoutine', e.target.value);
  }
  */

  const handleSelection = async (e) => {
    setRoutine(e.target.value)
    localStorage.removeItem('selectedRoutine');
    localStorage.setItem('selectedRoutine', e.target.value);
  }

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete routine "${routines.find(e => e.id === routine).name}"?`)) {
      routineService.deleteRoutine(routine)
      setRoutine('')
      window.location.reload();
    }
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
    <Table style={{"width":"75%", "border":"none"}} striped hover /* variant="dark" */>

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
        {workoutList.map((workout, index) =>
          <Workout key={workout.id} workout={workout} setUpdated={setUpdated} updated={updated} index={index} length={workoutList.length} />
        )}
      </tbody>
    </Table>
    {routine && 
      <>
      <Add routine={routine} setUpdated={setUpdated} updated={updated}/>
      <br/>
      <Button style={{color:"red"}} variant="link btn-sm" onClick={handleDelete}>-Delete routine</Button>
      </>
    }
  </div>
  )
}

export default EditRoutine
