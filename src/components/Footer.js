import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Connect with Us</h3>
                <ul className="social-links">
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-youtube"></i>
                        </a>
                    </li>
                </ul>
            </div>
<div>
    --------------------
</div>

            <div className="footer-contact">
                <p>A27G, 3rd Floor, Sector 16, Noida</p>
                <p>+91-7982627079 | info@genialemarketing.com</p>
                <p>© 2024 All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
