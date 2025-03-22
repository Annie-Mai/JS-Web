import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} J&S Coverage, Limited. All Rights Reserved.</p>
                <ul className="footer-links">
                    <li><a href="#privacy-policy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
