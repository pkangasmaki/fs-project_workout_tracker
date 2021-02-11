import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Workout.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import workoutService from '../services/workout'

const Add = ({ setNotification, routine, setUpdated, updated }) => {
  const [show, setShow] = useState(false)
  const [name, setName] = useState('')
  const [sets, setSets] = useState(0)
  const [repetitions, setRepetitions] = useState(0)
  const [weight, setWeight] = useState(0)

  const handleShow = () => setShow(true);
  const handleName = (e) => setName(e.target.value)
  const handleSets = (e) => setSets(e.target.value)
  const handleRepetitions = (e) => setRepetitions(e.target.value)
  const handleWeight = (e) => setWeight(e.target.value)

  const handleClose = () => {
    setShow(false)
    setName('')
    setSets(0)
    setRepetitions(0)
    setWeight(0)
  } 

  //TO DO: muutkin kentät toimii, atm pelkkä nimi
  const handleSave = async () => {
    await workoutService.addWorkout(name, routine)
    setNotification(`New exercise "${name}" added`)
    setName('')
    setSets(0)
    setRepetitions(0)
    setWeight(0)
    setShow(false)
    setUpdated(!updated)

    setTimeout(() => {setNotification('')}, 3500);
  }

  return (
    <>
      <Button variant="link btn-sm" onClick={handleShow}>+Add a new exercise</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add a new exercise
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Container>
          <div className="form-check">
          <Row>
            Name of the exercise
            <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={handleName}/>
          </Row>
          <br />
          <Row>
              <Col xs={6} md={4}>
              Sets
              </Col>
              <Col xs={6} md={4}>
              Reps
              </Col>
              <Col xs={6} md={4}>
              Weight
              </Col>
            </Row>
          </div>

            <Row>
              <Col xs={6} md={4}>
              <input type="number" className="form-control" placeholder="Sets" value={sets} onChange={handleSets}/>
              </Col>
              <Col xs={6} md={4}>
              <input type="number" className="form-control"  placeholder="Reps" value={repetitions} onChange={handleRepetitions}/>
              </Col>
              <Col xs={6} md={4}>
              <input type="number" className="form-control"  placeholder="Weight" value={weight} onChange={handleWeight}/>
              </Col>
            </Row>
          </Container>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add