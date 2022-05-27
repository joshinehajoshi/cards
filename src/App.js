import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { Container } from 'react-bootstrap';
import DateComp from './components/DateComp';

function App() {

  const [cardNumber, setCardNUmber] = useState(1);
  const [deleteCard, setDeleteCard] = useState(true);

  return (
    <div className="App">
    <Header />
    <div className='card-wrapper'>
    <Container>
      <Cards 
      deleteCard={deleteCard}
      setDeleteCard={setDeleteCard}
      cardNumber={cardNumber}
      setCardNUmber={setCardNUmber}
      />
    </Container>
    </div>
    </div>
  );
}

export default App;
