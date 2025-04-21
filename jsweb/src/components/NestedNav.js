import React from 'react';
import { Nav } from 'react-bootstrap';

function NestedNav() {
  return (
    <Nav className="flex-column second-navbar">
      <Nav.Link className="personal-lines-nav" href="#personal-line">Personal Lines</Nav.Link>
      <Nav.Link href="#automobile">Automobile Coverage</Nav.Link>
      <Nav.Link href="#travel">Travel Insurance</Nav.Link>
      <Nav.Link href="#life">Life Insurance</Nav.Link>
      <Nav.Link href="#home">Home Insurance</Nav.Link>

      <Nav.Link className="commercial-lines-nav" href="#commerical-lines">Commercial Lines</Nav.Link>
      <Nav.Link href="#group-health">Group Health</Nav.Link>
      <Nav.Link href="#workers">Workers' Compensation</Nav.Link>
      <Nav.Link href="#general-liability">General Liability</Nav.Link>
      <Nav.Link href="#building">Building</Nav.Link>
      <Nav.Link href="#commerical">Commercial Auto/Garage</Nav.Link>
    </Nav>
  );
}

export default NestedNav;
