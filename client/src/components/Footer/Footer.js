import React from "react";
import "./Footer.css";

// Function based React Component
const Footer = props => {
  // Default Class to apply to Component
  let classList = `Footer`;
  const handleClick = () => {
    props.handleLogout();
    // props.history.push("/");
  };

  return (
    // These are hard links in the HTLM files and will need to be udpated once we have the info
    <div className={classList}>
      <div className="Footer--left">
        <a href="">Sitemap</a>
        <a onClick={handleClick} style={{ cursor: 'pointer' }} >Logout</a>
      </div>
      <div className="Footer--center">
        <a href="mailto:info@cotripper.co?" target="_blank">
          info@cotripper.co
        </a>
      </div>
      <div className="Footer--right">
        <a href="">Instagram</a>
        <a href="">Facebook</a>
        <a href="">Meetup</a>
      </div>
    </div>
  );
};

export default Footer;
