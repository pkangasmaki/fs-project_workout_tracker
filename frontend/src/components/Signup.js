import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.css'

import {
  Link
} from "react-router-dom";

const Signup = () => {
  return (
    <div className="split-right right">
            <div className="centered">
              <div style={{padding: 10}}>
                <h1 style={{padding: 7}}>Sign up</h1>
                  <Form>
                    <Form.Group>
                      <Form.Control placeholder="Enter username" onChange={() => console.log('üsernmae')} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control placeholder="Enter password" onChange={() => console.log('password')} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control placeholder="Confirm your password" onChange={() => console.log('password confirm')} />
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