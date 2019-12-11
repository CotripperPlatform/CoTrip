import React from "react";
import "./SignUpAd.css";
import InputTextField from "../InputTextField/InputTextField";
// Function based React Component
const SignUpAd = props => {
  // Default Class to apply to Component
  let classList = `SignUpAd`;

  return (
    <div className={classList}>
      <h3>{props.head}</h3>
      <h5>{props.subhead}</h5>
      <div className="inputs">
        <InputTextField type="text" variation="small" name="first name" placeholder="First Name" />
        <InputTextField type="text" variation="small" name="last name" placeholder="Last Name" />
        <InputTextField type="text" variation="small" name="email" placeholder="Email" />
      </div>
    </div>
  );
};

export default SignUpAd;
