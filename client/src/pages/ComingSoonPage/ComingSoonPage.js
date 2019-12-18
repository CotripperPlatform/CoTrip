import React from "react";
import "./ComingSoonPage.css";
import Button from "components/Button/Button";

// Function based React Component
const ComingSoonPage = props => {
  // Default Class to apply to Component
  const handleClick = () => {
    props.handle_logout();
    props.history.push("/login");
  };
  return (
    <div className="ComingSoonPage__wrapper">
      <span></span>
      <Button text="Logout" handleClick={handleClick} />
      <h1>Coming Soon!</h1>
      <span></span>
    </div>
  );
};

export default ComingSoonPage;
