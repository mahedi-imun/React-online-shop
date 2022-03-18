import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Cart3 } from 'react-bootstrap-icons';


const MenuBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">free shop</Navbar.Brand>
    <Nav className=" justify-content-end fs-5 ">
      <Nav.Link className='text-light' href="#home">Home</Nav.Link>
      <Nav.Link className='text-light' href="#features">Features</Nav.Link>
      <Nav.Link className='text-light' href="#pricing">Pricing</Nav.Link>
      <Nav.Link className='text-light' href="#pricing">{<Cart3></Cart3>}<sup className='bg-danger px-1 m-1  rounded'>0</sup></Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
    );
};

export default MenuBar;