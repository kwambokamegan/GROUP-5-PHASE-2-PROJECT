import React from 'react';
import './ContactUs.css';
import NavBar from '../NavBar/NavBar';
 
const ContactUs = () => {
  return (
    <>
    <NavBar />
    <div className="contact-us">
      <div className="message">We love to talk to you! Here is how you can reach us:</div>
      <div className="contact-container">
        <div className="contact-item">
          <img src="data:image/png;base64,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" alt="Phone Logo" className="contact-icon" />
          <span>You can find us on Phone at : 0765748934.</span>
        </div>
        <div className="contact-item">
          <img src="data:image/jpeg;base64,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" alt="WhatsApp Logo" className="contact-icon" />
          <span>You can find us on WhatsApp at : 0764523242.</span>
        </div>
        <div className="contact-item">
          <img src="data:image/png;base64,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" alt="TikTok Logo" className="contact-icon" />
          <span>You can find us on TikTok at @SAFIRI_TRAVEL.</span>
        </div>
        <div className="contact-item">
          <img src="data:image/jpeg;base64,/jsx, just 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" alt="Instagram Logo" className="contact-icon" />
          <span>You can find us on Instagram at @SAFIRI_TRAVEL.</span>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default ContactUs;
