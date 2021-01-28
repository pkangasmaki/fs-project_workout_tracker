import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Workout.css'
import editService from '../services/edit'
import workoutService from '../services/workout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Edit = ({ exercise, sets, repetitions, weight, id }) => {
  const [show, setShow] = useState(false);
  const [editSets, setEditSets] = useState(sets)
  const [editRepetitions, setEditRepetitions] = useState(repetitions)
  const [editWeight, setEditWeight] = useState(weight)

  const handleShow = () => setShow(true);
  const handleSets = (e) => setEditSets(e.target.value)
  const handleRepetitions = (e) => setEditRepetitions(e.target.value)
  const handleWeight = (e) => setEditWeight(e.target.value)

  const handleClose = () => {
    setShow(false)
    setEditSets(sets)
    setEditRepetitions(repetitions)
    setEditWeight(weight)
  } 

  const handleSave = () => {

    const newData = {
      sets: Number(editSets),
      repetitions: Number(editRepetitions),
      weight: Number(editWeight)
    }
    editService.editValues(id, newData)
    setShow(false)
  }

  const handleDelete = () => {
    workoutService.deleteWorkout(id)
    setShow(false)
  }

  return (
    <>
      <Button variant="link" onClick={handleShow}>edit</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {exercise} 
            <Button style={{color:"red"}} variant="btn btn-link btn-sm" onClick={handleDelete}>delete</Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
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

              <Row>
                <Col xs={6} md={4}>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sets" value={editSets} onChange={handleSets}/>
                </Col>
                <Col xs={6} md={4}>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Reps" value={editRepetitions} onChange={handleRepetitions}/>
                </Col>
                <Col xs={6} md={4}>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Weight" value={editWeight} onChange={handleWeight}/>
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

export default Edit
