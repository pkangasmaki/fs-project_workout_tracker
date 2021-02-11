import React, {useState, useEffect} from 'react'
import EditModal from './EditModal'
import workoutService from '../services/workout' 

const Workout = ({ workout, setUpdated, updated, index, length, setNotification }) => {

  const [showUp, setShowUp] = useState(true)
  const [showDown, setShowDown] = useState(true)

  const hook = () => {
    if(index === 0) setShowUp(false)
    if(index + 1 === length) setShowDown(false)
  }
  useEffect(hook, [index, length])

  if(!workout) return null

  const moveUp = async () => {
    workoutService.moveUp(workout.id)
    window.location.reload();
  }

  const moveDown = () => {
    workoutService.moveDown(workout.id)
    window.location.reload();
  }

  return (
    <tr key={workout.id} >
    <td>
      {workout.exercise}
    </td>
    <td>{workout.sets}x{workout.repetitions}</td>
    <td>{workout.weight}kg</td>
    <td>
    {showUp &&<svg onClick={moveUp} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
      </svg>}

    {showDown && <svg onClick={moveDown} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
      </svg>}
    </td>
    <td style={{"backgroundColor":"white", "border":"none", "color":"black"}}>
      <EditModal setNotification={setNotification} exercise={workout.exercise} sets={workout.sets} repetitions={workout.repetitions} weight={workout.weight} id={workout.id} setUpdated={setUpdated} updated={updated} />
    </td>
  </tr>
  )
}

export default Workout