import React from 'react';
import { Nav } from 'react-bootstrap';

function NestedNav() {

  const handleScrollToSection = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    
    // Get section id from the link's href
    const targetId = e.target.getAttribute('href').substring(1); // Remove #
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Scroll to the target element, accounting navbar height
      window.scrollTo({
        top: targetElement.offsetTop - 80,  //hard coded huh...
        behavior: 'smooth',
      });
    }
  };

  return (
    <Nav className="flex-column second-navbar">
      <h2>Personal Lines</h2>
      <Nav.Link href="#automobile" onClick={handleScrollToSection}>Automobile Coverage</Nav.Link>
      <Nav.Link href="#travel" onClick={handleScrollToSection}>Travel Insurance</Nav.Link>
      <Nav.Link href="#life" onClick={handleScrollToSection}>Life Insurance</Nav.Link>
      <Nav.Link href="#home" onClick={handleScrollToSection}>Home Insurance</Nav.Link>
      <h2>Commercial Lines</h2>
      <Nav.Link href="#group-health" onClick={handleScrollToSection}>Group Health</Nav.Link>
      <Nav.Link href="#workers" onClick={handleScrollToSection}>Workers' Compensation</Nav.Link>
      <Nav.Link href="#general-liability" onClick={handleScrollToSection}>General Liability</Nav.Link>
      <Nav.Link href="#building" onClick={handleScrollToSection}>Building</Nav.Link>
      <Nav.Link href="#commerical" onClick={handleScrollToSection}>Commercial Auto/Garage</Nav.Link>
    </Nav>
  );
}

export default NestedNav;
