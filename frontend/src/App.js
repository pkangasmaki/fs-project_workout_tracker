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
import Footer from './components/Footer'
import Notification from './components/Notification'
import Routines from './components/Routines'
import Home from './components/Home'

import Table from 'react-bootstrap/Table'

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
          <nav>
            <Table striped>
              <tbody>
                <tr>
                  <td>
                    <Link to="/" className='link'> Home</Link>
                  </td>
                  <td style={{paddingLeft: 20}}>
                    <Link to="/routine" className='link'> Routines</Link>
                  </td>
                  <td style={{paddingLeft: 20}}>
                    <Link to="/createnew" className='link'> Add routine </Link>
                  </td>
                  <td style={{paddingLeft: 20}}>
                    <Link to="/suggestions" className='link'> Suggestions</Link>
                  </td>
                  <td>
                    <Logout user={user} setUser={setUser} setRoutine={setRoutine} setUserRoutines={setUserRoutines} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </nav>
          <Notification notification={notification} />
          
          <Switch>
            <Route path="/suggestions">
              <Suggestions />
            </Route>
            <Route path="/createnew">
              <CreateNew user={user} setNotification={setNotification} />
            </Route>
            <Route path="/routine">
              <Routines setRoutine={setRoutine} routine={routine} routines={userRoutines} setNotification={setNotification} />
            </Route>
            <Route path="/">
              <Home />
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
