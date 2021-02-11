import React from 'react'
import Table from 'react-bootstrap/Table'

const RoutineTable = ({routine, routines, workoutList}) => {
  return (
    <div>
      <Table style={{"width":"55%"}} striped bordered hover>
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
    </Table>
    </div>
  )
}

export default RoutineTable