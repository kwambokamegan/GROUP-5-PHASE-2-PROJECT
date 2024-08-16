import React from 'react';
// import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import '../Footer/Footer.css';
import logo from '../pictures/SAFIRI LOGO.png';

function Footer() {
  return (
    <footer id="footersection">
      <div id="footercontainer">
        <img src={logo} alt="site logo" className="footer logo" />
        <p>
          Email <a href="mailto:Safiri2@gmail.com">Safiri2@gmail.com</a>
        </p>
        <p>
          Phone <a href="tel:+254700987654">+254700987654</a>
        </p>
        <p>
          Location
          <a href="https://www.google.com/maps/dir/-1.179648,36.880384/moringa+school/@-1.2350062,36.7609179,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x182f1a6bf7445dc1:0x940b62a3c8efde4c!2m2!1d36.7846067!2d-1.3004862?entry=ttu">
            Ngong Lane Plaza,1st Floor, Nairobi
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
