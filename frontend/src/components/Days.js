import React from 'react'

const Days = ({ weekDays }) => {

  return(
    <div >
      <table>
        <tbody>
          {weekDays.map(day => {
              return (
                <tr>
                  <td>
                    {day}:
                  </td>
                  <td>
                    Push
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Days