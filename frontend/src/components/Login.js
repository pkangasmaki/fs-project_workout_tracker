import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.css'
import logo from '../taustakuva2.png';
import Signup from './Signup'
import loginService from '../services/login'

import {
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

const Login = ( {setUser} ) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [stayLoggedIn, setStayLoggedIn] = useState(false)

  let history = useHistory()

  const handleLogin = async (e) => {
    e.preventDefault()
    const credentials = {
      username,
      password
    }
    try {
      const loggedInUser = await loginService.login(credentials)
      setUser(loggedInUser)
      if(stayLoggedIn) {
        localStorage.setItem('loggedUser', JSON.stringify(loggedInUser));
      }
      history.push('/')
    } catch (e) {
      console.log('Incorrect credentials')
    }
  }

  const handleCheckbox = () => {
    setStayLoggedIn(!stayLoggedIn)
  }

  return (
    <div>
      <div className="split-left left" 
        style = {{ backgroundImage: `url(${logo})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="centered title">
          <h2>Workout tracker</h2>
          <p>welcome!</p>
        </div>
      </div>
      <Switch>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/">
          <div className="split-right right">
            <div className="centered">
              <div style={{padding: 10}}>
                <h1 style={{padding: 5}}>Login</h1>
                  <Form onSubmit={handleLogin}>
                    <Form.Group>
                      <Form.Control placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                      <Form.Text className="text-muted">
                        We'll never share your information with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group>
                      <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Check type="checkbox" id="stay" label="Stay signed in" onChange={handleCheckbox}/>
                    <Form.Text className="text-muted">
                    Don't have an account? Click here to <Link to="/signup">Sign up</Link>
                  </Form.Text>
                <Button style={{margin: 10}} type='submit'> Login </Button>
              </Form>
          </div>
        </div>
      </div>
        </Route>
      </Switch>
    </div>
  )
}

export default Login