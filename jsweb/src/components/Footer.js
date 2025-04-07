import React, { useState } from 'react';
import "./Footer.css";
import Modal from 'react-bootstrap/Modal';

function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="main-content">
            {/* Your page content goes here */}
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} J&S Coverage, Limited. All Rights Reserved.</p>
                    <ul className="footer-links">
                        <li>
                            <a href="#!" onClick={handleShow}>
                                Privacy Policy
                            </a>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Woohoo, you are reading this text in a modal!
                                </Modal.Body>
                            </Modal>
                        </li>
                        {/* Update the "Contact Us" link to open the mail client */}
                        <li>
                            <a href="mailto:contact@jscoverage.com?subject=Inquiry&body=Hello%20J&S%20Coverage,%20I%20have%20an%20inquiry.">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
