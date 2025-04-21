import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); //track the toggle state

  const handleLinkClick = () => {
    setIsOpen(false); //when a link is clicked closes nav
  };

  const handleToggle = () => {
    setIsOpen(!isOpen); //toggle the navbar when the button is clicked
  };

  return (
    <Navbar className = "navbar-top" expand="lg" bg="dark" fixed = "top" variant="dark" style={{ zIndex: 1050}}>
      <Container>
        <Navbar.Brand as={Link} to="/home">J & S Coverage</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={handleToggle} // update toggle state
        />
        <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" onClick={handleLinkClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>About</Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={handleLinkClick}>Services</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="d-lg-none">
              <h2>Personal Lines</h2>
              <NavDropdown.Item href="#automobile" onClick={handleLinkClick}>Automobile Coverage</NavDropdown.Item>
              <NavDropdown.Item href="#travel" onClick={handleLinkClick}>Travel Insurance</NavDropdown.Item>
              <NavDropdown.Item href="#life" onClick={handleLinkClick}>Life Insurance</NavDropdown.Item>
              <NavDropdown.Item href="#home" onClick={handleLinkClick}>Home Insurance</NavDropdown.Item>
              <NavDropdown.Divider></NavDropdown.Divider>
              <h2>Commercial Lines</h2>
              <NavDropdown.Item href="#group-health" onClick={handleLinkClick}>Group Health</NavDropdown.Item>
              <NavDropdown.Item href="#workers" onClick={handleLinkClick}>Workers' Compensation</NavDropdown.Item>
              <NavDropdown.Item href="#general-liability" onClick={handleLinkClick}>General Liability</NavDropdown.Item>
              <NavDropdown.Item href="#building" onClick={handleLinkClick}>Building</NavDropdown.Item>
              <NavDropdown.Item href="#commerical" onClick={handleLinkClick}>Commercial Auto/Garage</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
