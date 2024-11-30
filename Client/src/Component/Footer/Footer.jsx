import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Message and Email Form */}
        <div className="footer-main">
          <p className="footer-message">
            Get updates on fun stuff you probably want to know about in your inbox.
          </p>
          <form className="footer-form">
            <input
              type="email"
              placeholder="Email Address"
              className="footer-input"
            />
            <button type="submit" className="footer-submit">
              ➔
            </button>
          </form>
         
        </div>

        {/* Menu Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Menu</h4>
            <ul>
              <li><a href="#">Shop All</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Vibes</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Help & FAQ</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">    
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="social-icon arrow-icon">
          <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </a> {/* Arrow Icon */}
      </div>

      <p className="footer-copyright">
        © 2022 The Afterlogo Company Inc.
      </p>
    </footer>
  );
};
export default Footer;
