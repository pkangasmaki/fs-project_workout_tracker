import React from 'react'
import './Workout.css'
import Edit from './Edit'

const Workout = ({ workout, id }) => {

  if(!workout) return null

  return (
    <tr>
      <td className="workout">{workout.exercise}</td>
      <td className="workout">{workout.sets}x{workout.repetitions}</td>
      <td className="workout">{workout.weight}kg</td>
      <td><Edit exercise={workout.exercise} sets={workout.sets} repetitions={workout.repetitions} weight={workout.weight} id={id} /></td>
    </tr>
  )
}

export default Workout