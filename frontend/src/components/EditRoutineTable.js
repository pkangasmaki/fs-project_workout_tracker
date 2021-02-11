import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Workout from './Workout'
import Add from './Add'
import routineService from '../services/routine'

const EditRoutineTable = ({routine, setRoutine, routines, workoutList, updated, setUpdated}) => {

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete routine "${routines.find(e => e.id === routine).name}"?`)) {
      routineService.deleteRoutine(routine)
      setRoutine('')
      window.location.reload();
    }
  }

  return (
    <div>
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

export default EditRoutineTable