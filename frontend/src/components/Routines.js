import React from 'react';

const Routines = ({handleSelection, routine}) => {
  return (
    <div>
    <select defaultValue={routine} name="routines" id="routines" onChange={handleSelection}>
      <option value='' disabled> select your routine </option>
      <option value='Push'>Push</option>
      <option value='Pull'>Pull</option>
      <option value='Legs'>Legs</option>
      <option value='Full body'>Full body</option>
    </select>
    <div>{`Chosen routine: ${routine}`}</div>
  </div>
  )
}

export default Routines
