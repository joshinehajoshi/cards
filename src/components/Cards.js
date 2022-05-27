import React, {useState} from 'react';
import '../App.css';
import { Card, Button, Form, Col, Row } from 'react-bootstrap';
import DateComp from './DateComp';


function Cards({deleteCard, setDeleteCard, cardNumber, setCardNumber, id, budget}) {
  console.log(cardNumber)

  const deleteCardHandler = () => {
    setDeleteCard(false)
    console.log(deleteCard)
  }
  return (
    <Card style={{ width: '36rem' }}>
  <Card.Body>
  <Form>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="4">
      Card Name
    </Form.Label>
    <Col sm="8">
      <Form.Control plaintext defaultValue={`Project ${id}`} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="4">
      Project Budget
    </Form.Label>
    <Col sm="8">
      <Form.Control plaintext defaultValue={budget}  />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="4">
      Project End Date
    </Form.Label>
    <Col sm="8">
      <DateComp />
    </Col>
  </Form.Group>

  <hr />
  <div className="card-footer">
    <h5>Edit Card</h5>
    <h5>Copy Card</h5>
    <h5 onClick={deleteCardHandler}>Delete Card</h5>
  </div>

</Form>
  </Card.Body>
</Card>
  )
}

export default Cards