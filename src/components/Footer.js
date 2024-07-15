import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="https://github.com/anjali20082003" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com/in/anjali-955b2623a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="footer-icon" />
                </a>
                <a href="mailto:anjalirajput20082003@gmail.com">
                    <MdEmail className="footer-icon" />
                </a>
               
            </div>

        </footer>
    );
};

export default Footer;
