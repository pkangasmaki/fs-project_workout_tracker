import React from 'react'
import Card from 'react-bootstrap/Card'

const Suggestions = () => {
  return (
    <div>
      <h3>Suggested routines for beginner/intermediate athletes</h3>
      <Card style={{ width: '18rem', float: 'left' }}>
        <Card.Body>
          <Card.Title>PPL</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Push pull legs</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href="https://medium.com/@BradNewtonTV/the-ultimate-beginner-guide-push-pull-legs-5d576162868f">PPL routine @Medium.com</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', float: 'left' }}>
        <Card.Body>
          <Card.Title>Full body</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href="https://builtwithscience.com/best-full-body-workout/">Full body routine @Buildwithscience.com</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', float: 'left' }}>
        <Card.Body>
          <Card.Title>Upper/Lower body</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href="https://www.muscleandstrength.com/workouts/upper-lower-4-day-gym-bodybuilding-workout">Upper/lower routine @muscleandstrength.com</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>5-day split</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href="https://victoremgear.com/blogs/resistance-training/5-day-workout-split">5-day split routine @Victoremgear.com</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Suggestions