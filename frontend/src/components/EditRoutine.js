import React, { useEffect } from 'react'
//import userService from '../services/user'

const EditRoutine = () => {
  
  const hook = () => {
    console.log('hook')
    const fetchData = async () => {
      //const routines = await userService.
    }
    fetchData()
  }
  useEffect(hook, [])

  return (
    <div>
      Hello edit
    </div>
  )
}

export default EditRoutine