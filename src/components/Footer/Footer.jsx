import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "../Footer/Footer.css";
import logo from "../pictures/SAFIRI LOGO.png"

function Footer() {
  return (
    <footer id="footersection">
      <div id="footercontainer">
        <img src={logo} alt="site logo" className="footer logo"/>
        <h3>Contact Us</h3>
        <p>
          <FaEnvelope />
          Email <a href="mailto:Safiri2@gmail.com">Safiri2@gmail.com</a>
        </p>
        <p>
          <FaPhone />
          Phone <a href="tel:+254700987654"></a>+254700987654
        </p>
        <p>
          <FaMapMarkerAlt />
          Location:Ngong Lane Plaza,1st Floor, Nairobi,Kenya
        </p>
      </div>
    </footer>
  );
}

export default Footer;
