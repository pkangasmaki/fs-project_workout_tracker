import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.css'
import userService from '../services/user'
import { useHistory } from "react-router-dom";

import {
  Link
} from "react-router-dom";

const Signup = () => {

  const [ username, setUsername] = useState('')
  const [ name, setName] = useState('')
  const [ password, setPassword] = useState('')
  const [ passwordConfirm, setPasswordConfirm] = useState('')

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== passwordConfirm) {
      console.log('passwords do not match')
      return;
    }
    try {
      const newUser = {
        username,
        name,
        password,
      }
      await userService.signUp(newUser)
      history.push('/')
      console.log('new user added')
      //Redirect -> login
      //Ilmotus uudesta käyttäjästä
    } catch (e) {
      console.log('error')
    }
  }

  return (
    <div className="split-right right">
            <div className="centered">
              <div style={{padding: 10}}>
                <h1 style={{padding: 7}}>Sign up</h1>
                  <Form onSubmit={handleSubmit}>
                  <Form.Group>
                      <Form.Control placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control type='password' placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control type='password' placeholder="Confirm your password" onChange={(e) => setPasswordConfirm(e.target.value)} />
                    </Form.Group>
                    <Form.Text className="text-muted">
                    Already have an account? Click here to <Link to="/">Sign in</Link>
                  </Form.Text>
                <Button style={{margin: 10}} type='submit'> Sign up </Button>
              </Form>
          </div>
        </div>
      </div>
  )
}

export default Signup