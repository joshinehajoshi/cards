import React from 'react';
import '../App.css';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container className="header-container">
      <div>
      <Navbar.Brand href="#home">
      Number of Projects:
      </Navbar.Brand>
      <Navbar.Brand href="#home">
      04
      </Navbar.Brand>
      </div>
      <div>
      <Navbar.Brand href="#home">
      Total Budget:
      </Navbar.Brand>
      <Navbar.Brand href="#home">
      18000
      </Navbar.Brand>
      </div>
    </Container>
  </Navbar>
  )
}

export default Header