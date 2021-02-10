import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CreateNew from './components/CreateNew'
import Suggestions from './components/Suggestions'
import Login from './components/Login'
import Logout from './components/Logout'
import EditRoutine from './components/EditRoutine'
import Footer from './components/Footer'
import Notification from './components/Notification'
import Routines from './components/Routines'

import userService from './services/user'

const App = () => {

  const [routine, setRoutine] = useState('')
  const [user, setUser] = useState(null)
  const [userRoutines, setUserRoutines] = useState([])
  const [notification, setNotification] = useState('')

  const routineHook = () => {
    const getRoutine = async (user) => {
      const found = await userService.getUser(user)
      setUserRoutines(found.routines)
    }
    if(user) getRoutine(user.id)
  }

  const storageHook = () => {
    const storageUser = localStorage.getItem('loggedUser')
    if (storageUser) {
      setUser(JSON.parse(storageUser))
    }
  }

  useEffect(routineHook, [user, userRoutines])
  useEffect(storageHook, [])

  return (
    <div>
    <Router>
      {!user && <Login setUser={setUser} />}

      {user &&
        <div style={{"marginLeft":"10px"}}>
          <Logout user={user} setUser={setUser} setRoutine={setRoutine} setUserRoutines={setUserRoutines} />
          <nav>
            <table className='nav-table'>
              <tbody>
                <tr>
                  <td>
                    <Link to="/"> Home</Link>
                  </td>
                  <td>
                    <Link to="/routine"> Routines</Link>
                  </td>
                  <td >
                    <Link to="/edit"> Edit routines </Link>
                  </td>
                  <td>
                    <Link to="/createnew"> Add routine </Link>
                  </td>
                  <td>
                    <Link to="/suggestions"> Suggestions</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </nav>

          <h3>Workout tracker</h3>
          <Notification notification={notification} />
          
          <Switch>
            <Route path="/suggestions">
              <Suggestions />
            </Route>
            <Route path="/createnew">
              <CreateNew user={user} setNotification={setNotification} />
            </Route>
            <Route path="/edit">
              <EditRoutine setRoutine={setRoutine} routine={routine} routines={userRoutines} />
            </Route>
            <Route path="/routine">
              <Routines setRoutine={setRoutine} routine={routine} routines={userRoutines}/>
            </Route>
          </Switch>
        </div>
      }
    </Router>
    <Footer />
    </div>
  )
}

export default App;
