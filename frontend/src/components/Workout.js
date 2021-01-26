import React from 'react'

const Workout = ({ workout }) => {
  if(!workout) return null

  const tableStyle = {
    "border": "1px solid black",
    "padding": 4
 };

  return (
    <tr style={tableStyle}>
      <td style={tableStyle}>{workout.exercise}</td>
      <td style={tableStyle}>{workout.sets}x{workout.repetitions}</td>
      <td style={tableStyle}>{workout.weight}kg</td>
    </tr>
  )
}

export default Workout