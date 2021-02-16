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
import DayForm from './components/DayForm'
import SleepPage from './components/SleepPage'

import Table from 'react-bootstrap/Table'

import userService from './services/user'

import logo from './img/logo.png'

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
    <div className="fill-window">
    <Router>
      {!user && <Login setUser={setUser} />}

      {user &&
        <div style={{"marginLeft":"10px"}}>
          <nav>
            <Table className='navig'>
              <tbody>
                <tr>
                  <td>
                    <img className='logo' src={logo} alt="logo"></img>
                  </td>
                  <td>
                    <Link to="/" className='link'> Home</Link>
                  </td>
                  <td >
                    <Link to="/routine" className='link'> Routines</Link>
                  </td>
                  <td >
                    <Link to="/days" className='link'> Day-planner </Link>
                  </td>
                  <td >
                    <Link to="/createnew" className='link'> Add routine </Link>
                  </td>
                  <td >
                    <Link to="/sleep" className='link'> Sleep-schedule </Link>
                  </td>
                  <td >
                    <Link to="/suggestions" className='link'> Suggestions</Link>
                  </td>
                  <div>
                    <Logout user={user} setUser={setUser} setRoutine={setRoutine} setUserRoutines={setUserRoutines} />
                  </div>
                </tr>
              </tbody>
            </Table>
          </nav>
          <Notification notification={notification} />
          
          <Switch>
            <Route path="/suggestions">
              <Suggestions />
            </Route>
            <Route path="/sleep">
              <SleepPage />
            </Route>
            <Route path="/days">
              <DayForm routine={routine} routines={userRoutines} />
            </Route>
            <Route path="/createnew">
              <CreateNew user={user} setNotification={setNotification} />
            </Route>
            <Route path="/routine">
              <Routines user={user} setRoutine={setRoutine} routine={routine} routines={userRoutines} setNotification={setNotification} />
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
