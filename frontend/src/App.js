import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Routines from './components/Routines'
import CreateNew from './components/CreateNew'
import Suggestions from './components/Suggestions'
import Login from './components/Login'
import Logout from './components/Logout'

const App = () => {

  const [routine, setRoutine] = useState('')
  const [newRoutine, setNewRoutine] = useState('')
  const [user, setUser] = useState(null)

  const hook = () => {
    const user = localStorage.getItem('loggedUser')
    if (user) {
      setUser(JSON.parse(user))
    }
  }
  useEffect(hook, [])

  //Set drop-down value to routine-state
  const handleSelection = (e) => {
    setRoutine(e.target.value)
    console.log('Selected routine:', e.target.value)
  }

  return (
    <Router>
      {!user && <Login setUser={setUser} />}

      {user &&
        <div>
          <Logout user={user} setUser={setUser} />
          <nav>
            <table className='nav-table'>
              <tbody>
                <tr>
                  <td >
                    <Link to="/">Home</Link>
                  </td>
                  <td>
                    <Link to="/createnew">Create new</Link>
                  </td>
                  <td>
                    <Link to="/suggestions">Suggestions</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </nav>

          <h1>Workout tracker</h1>
          
          <Switch>
            <Route path="/suggestions">
              <Suggestions />
            </Route>
            <Route path="/createnew">
              <CreateNew newRoutine={newRoutine} setNewRoutine={setNewRoutine} />
            </Route>
            <Route path="/">
              <Routines handleSelection={handleSelection} routine={routine} />
            </Route>
          </Switch>
        </div>
      }
    </Router>
  )
}

export default App;
