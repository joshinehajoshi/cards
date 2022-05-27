import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Header />
    <div className='card-wrapper'>
    <Container>
      <Cards />
    </Container>
    </div>
    </div>
  );
}

export default App;
