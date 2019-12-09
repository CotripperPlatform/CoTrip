
import React from 'react';
import "./Footer.css";

// Function based React Component
const Footer = (props) => {

  // Default Class to apply to Component
  let classList = `Footer`;


  return (
    // These are hard links in the HTLM files and will need to be udpated once we have the info
    <div className={classList}>
      <div className="footer-left">
        <a href="">Sitemap</a>
      </div>
      <div className="footer-center">
        <a href="mailto:info@cotripper.co?" target="_blank">info@cotripper.co</a>
      </div>
      <div className="footer-right">
        <a href="">Instagram</a>
        <a href="">Facebook</a>
        <a href="">Meetup</a>
      </div>
    </div>
  );
}

export default Footer;
