import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const SleepForm = () => {
  return(
    <div >
      <Form style={{paddingLeft: 20}}>
        <Form.Row className="align-items-center">
        <Col xs="auto">
            <Form.Label>
              Date:
            </Form.Label>
            <Form.Control
              type="date"
              className="mb-2"
              id="inlineFormInput"
              placeholder="Bedtime"
            />
          </Col>
          <Col xs="auto">
            <Form.Label>
              Bedtime
            </Form.Label>
            <Form.Control
              type="time"
              className="mb-2"
              id="inlineFormInput"
              placeholder="Bedtime"
            />
          </Col>
          <Col xs="auto">
            <Form.Label>
              Woke up
            </Form.Label>
            <Form.Control
              type="time"
              className="mb-2"
              id="inlineFormInput"
              placeholder="Wake up"
            />
          </Col>
          <Col style={{paddingTop: 36}}xs="auto">
            <Button type="submit" size="sm" className="mb-2">
                Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  )
}

export default SleepForm