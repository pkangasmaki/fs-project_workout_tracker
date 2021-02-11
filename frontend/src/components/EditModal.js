import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Workout.css'
import editService from '../services/edit'
import workoutService from '../services/workout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EditModal = ({ setNotification, exercise, sets, repetitions, weight, id, setUpdated, updated }) => {
  const [show, setShow] = useState(false);
  const [editSets, setEditSets] = useState(sets)
  const [editRepetitions, setEditRepetitions] = useState(repetitions)
  const [editWeight, setEditWeight] = useState(weight)
  const [editName, setEditName] = useState(exercise)
  const [acceptedName, setAcceptedName] = useState(exercise)
  const [openEditName, setOpenEditName] = useState(false)

  const handleShow = () => setShow(true);
  const handleSets = (e) => setEditSets(e.target.value)
  const handleRepetitions = (e) => setEditRepetitions(e.target.value)
  const handleWeight = (e) => setEditWeight(e.target.value)
  const handleName = (e) => setEditName(e.target.value)

  const handleClose = () => {
    setShow(false)
    setEditSets(sets)
    setEditRepetitions(repetitions)
    setEditWeight(weight)
  } 

  const handleSave = async () => {

    const newData = {
      sets: Number(editSets),
      repetitions: Number(editRepetitions),
      weight: Number(editWeight)
    }
    await editService.editValues(id, newData)
    setShow(false)
    setUpdated(!updated)
  }

  const handleDelete = async () => {
    if(window.confirm(`Are you sure you want to delete exercise '${exercise}'?`)) {
      await workoutService.deleteWorkout(id)
      setShow(false)
      setUpdated(!updated)
      setNotification(`Exercise "${exercise}" deleted`)

      setTimeout(() => {setNotification('')}, 3500);
    }
  }

  const handleEditButton = () => {
    setOpenEditName(!openEditName)
    console.log(openEditName)
  }

  const handleCancel = () => {
    setOpenEditName(!openEditName)
  }

  const handleOk = () => {
    setAcceptedName(editName)
    setOpenEditName(!openEditName)
  }

  return (
    <>
      <Button variant="link" onClick={handleShow}>edit</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>

          {openEditName && 
          <div>
            <input className="form-control"  placeholder="Name" value={editName} onChange={handleName}/>
            <Button style={{color:"black"}} variant="btn btn-link btn-sm" onClick={handleOk}>ok</Button>
            <Button style={{color:"black"}} variant="btn btn-link btn-sm" onClick={handleCancel}>cancel</Button>
          </div>
          }

          {!openEditName && <>{acceptedName} <svg style={{paddingLeft: 2, color:"black"}} onClick={handleEditButton} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg></>}
          {!openEditName && <Button style={{color:"red"}} variant="btn btn-link btn-sm" onClick={handleDelete}>delete</Button>}
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

export default EditModal
