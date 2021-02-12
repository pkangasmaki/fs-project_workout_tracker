import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Days from './Days'
import EditDays from './EditDays'

const DayForm = ({routine, routines}) => {

  const [selected, setSelected] = useState('')
  const [view, setView] = useState('default')

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const handleSelection = async (e) => {
    setSelected(e.target.value)
    //localStorage.removeItem('selectedRoutine');
    //localStorage.setItem('selectedRoutine', e.target.value);
  }

  return(
    <div >
      <h3>
        Day-planner 
        {view === 'default' && <Button variant='link' onClick={() => setView('edit')}> edit </Button>}
        {view === 'edit' && <Button variant='link' onClick={() => setView('default')}> save </Button>}
      </h3>
      {view === 'default' && <Days weekDays={weekDays} />}
      {view === 'edit' && <EditDays routine={routine} routines={routines} weekDays={weekDays} />}
    </div>
  )
}

export default DayForm