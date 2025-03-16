import React from 'react';
import { Nav } from 'react-bootstrap';
function NestedNav() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column second-navbar">
    <Nav.Link href="/home">Active</Nav.Link>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav>
  )
}

export default NestedNav