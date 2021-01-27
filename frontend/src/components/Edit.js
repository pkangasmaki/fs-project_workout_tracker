import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Workout.css'
import editService from '../services/edit'

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

  return (
    <>
      <Button variant="link" onClick={handleShow}>edit</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{exercise}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Sets: <input type="number" value={editSets} onChange={handleSets} /></div>
          <div>Reps: <input type="number" value={editRepetitions} onChange={handleRepetitions} /></div>
          <div>Weight: <input type="number" value={editWeight} onChange={handleWeight} /></div>
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