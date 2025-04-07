import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false); //when link clicked close nav
  };

  const handleToggle = () => {
    setIsOpen(!isOpen); //toggles navbar when the button is clicked
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" style={{ zIndex: 1050 }}>
      <Container>
        <Navbar.Brand as={Link} to="/home">J & S Coverage</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={handleToggle} // updates toggle state
        />
        <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" onClick={handleLinkClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>About</Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={handleLinkClick}>Services</Nav.Link>
            
            {/* Mobile view */}
            <NavDropdown 
              title="Dropdown" 
              id="basic-nav-dropdown" 
              className="d-block d-lg-none" // show only in mobile view
            >
              <NavDropdown.Item href="#action/3.1" onClick={handleLinkClick}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={handleLinkClick}>Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={handleLinkClick}>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={handleLinkClick}>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
