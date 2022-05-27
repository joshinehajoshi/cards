import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { Container } from 'react-bootstrap';
import { cardData } from './Data/cardData';

function App() {
  console.log(cardData);

  const [cardNumber, setCardNUmber] = useState(1);
  const [deleteCard, setDeleteCard] = useState(false);

  return (
    <div className="App">
    <Header />
    <div className='card-wrapper'>
    <Container className='card-container'>
      {cardData.map((item) => {
        return (
          <Cards
          deleteCard={deleteCard}
          setDeleteCard={setDeleteCard}
          cardNumber={cardNumber}
          setCardNUmber={setCardNUmber}
          id={item.id}
          budget={item.budget}
          />
        )
      })}
      {/* <Cards 
      deleteCard={deleteCard}
      setDeleteCard={setDeleteCard}
      cardNumber={cardNumber}
      setCardNUmber={setCardNUmber}
      /> */}
    </Container>
    </div>
    </div>
  );
}

export default App;
