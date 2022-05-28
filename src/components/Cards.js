import React, {useState} from 'react';
import '../App.css';
import { Card, Button, Form, Col, Row } from 'react-bootstrap';
import DateComp from './DateComp';
import { cardData } from '../Data/cardData';


function Cards({deleteCard, setDeleteCard, cardNumber, setCardNumber, id, budget}) {

  const [isEdit, setIsEdit] = useState(false);

  const editHandler = (id) => {
    if(id === id) {
      setIsEdit(!isEdit);
    }
  }

  console.log(cardNumber)

  const deleteCardHandler = (id) => {
    cardData = cardData.filter(function( obj ) {
      return obj.id !== id;
  });
  }
console.log(cardData);

  const copyHandler = (id) => {
    if(id === id) {
    cardData.push({
      id: Math.random,
      budget: budget
    }) 
  }
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
      <Form.Control 
      plaintext defaultValue={`Project ${id}`} 
      disabled = {!isEdit}
      />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="4">
      Project Budget
    </Form.Label>
    <Col sm="8">
      <Form.Control 
      plaintext defaultValue={budget}
      disabled = {!isEdit}
      />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="4">
      Project End Date
    </Form.Label>
    <Col sm="8">
      <DateComp
      disabled = {!isEdit}
      />
    </Col>
  </Form.Group>

  <hr />
  <div className="card-footer">
    <h5 onClick={(id) => {editHandler(id)}}>Edit Card</h5>
    <h5 onClick={(id) => {copyHandler(id)}}>Copy Card</h5>
    <h5 onClick={(id) => {deleteCardHandler(id)}}>Delete Card</h5>
  </div>

</Form>
  </Card.Body>
</Card>
  )
}

export default Cards