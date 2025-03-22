import React from 'react';
import { Nav } from 'react-bootstrap';

function NestedNav() {
  return (
    <Nav className="flex-column second-navbar">
      <h2>Personal Lines</h2>
      <Nav.Link href="#automobile">Automobile Coverage</Nav.Link>
      <Nav.Link href="#travel">Travel Insurance</Nav.Link>
      <Nav.Link href="#life">Life Insurance</Nav.Link>
      <Nav.Link href="#home">Home Insurance</Nav.Link>
      <h2>Commercial Lines</h2>
      <Nav.Link href="#group-health">Group Health</Nav.Link>
      <Nav.Link href="#workers">Workers' Compensation</Nav.Link>
      <Nav.Link href="#general-liability">General Liability</Nav.Link>
      <Nav.Link href="#building">Building</Nav.Link>
      <Nav.Link href="#commerical">Commercial Auto/Gaarage</Nav.Link>
    </Nav>
  );
}

export default NestedNav