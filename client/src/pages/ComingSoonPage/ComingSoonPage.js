import React from "react";
import "./ComingSoonPage.css";
import Button from "components/Button/Button";
import Navbar from "components/Navbar/Navbar.js";

// Function based React Component
const ComingSoonPage = props => {
  // Default Class to apply to Component
  const handleClick = () => {
    props.handle_logout();
    props.history.push("/");
  };
  return (
    <div className="ComingSoonPage__wrapper">
      <Navbar />
      <h1>Coming Soon!</h1>
      <Button text="Logout" handleClick={handleClick} />
    </div>
  );
};

export default ComingSoonPage;
