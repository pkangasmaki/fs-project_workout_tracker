import React, { useState } from 'react'

const EditDays = ({routine, routines, weekDays}) => {

  const [selected, setSelected] = useState('')

  const handleSelection = async (e) => {
    setSelected(e.target.value)
  }

  return(
    <table>
      <tbody>
        {weekDays.map(day => {
            return (
              <tr>
                <td>
                  {day}:
                </td>
                <td>
                  <select defaultValue={routine} name="routines" id="routines" onChange={handleSelection}>
                    <option value='' disabled> Select a routine </option>
                    {routines.map(routine =>
                      <option key={routine.id} value={routine.id}>{routine.name}</option>
                    )}
                  <option value='rest'> Rest </option>
                  </select>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default EditDays