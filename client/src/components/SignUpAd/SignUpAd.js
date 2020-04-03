import React from "react";
import "./SignUpAd.css";
import InputTextField from "../InputTextField/InputTextField";
import Button from "../Button/Button";
// Function based React Component
const SignUpAd = props => {
  // Default Class to apply to Component
  let { heading, subheading } = props;
  const handleClick = e => {
    console.log("Clicked!");
  };
  return (
    <div className="SignUpAd">
      <h2 className="SignUpAd__heading">{heading}</h2>
      <h3 className="SignUpAd__subheading">{subheading}</h3>
      <div className="SignUpAd__inputs">
        <InputTextField type="text" variation="small" name="first name" placeholder="First Name" />
        <InputTextField type="text" variation="small" name="last name" placeholder="Last Name" />
        <InputTextField type="text" variation="small" name="email" placeholder="Email" />
      </div>
      <Button text="Join the Tribe" color="pink" handleClick={handleClick} />
    </div>
  );
};

export default SignUpAd;
