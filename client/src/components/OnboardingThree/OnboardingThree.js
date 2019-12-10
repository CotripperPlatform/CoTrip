import React from "react";
import "./OnboardingThree.css";
import Logo from "../Logo/Logo";
import InputTextField from "../InputTextField/InputTextField";
import { Link } from "@storybook/router";

// Function based React Component
const OnboardingThree = props => {
  // Default Class to apply to Component
  let classList = `onboarding-three`;

  return (
    <div className={classList}>
      <Logo />
      <h1 className="onboarding-three-text">Step Three: Personalize Your Profile (optional)</h1>

      <div className="filler-div"></div>
      <InputTextField type="text" name="age" placeholder="What is your age?" />
      <InputTextField type="destination" placeholder="What is your dream destination(s)?" />
      <button className="filler-btn">Finish</button>
      <div className="filler-circles">
        <div className="filler-circle"></div>
        <div className="filler-circle"></div>
        <div className="filler-circle filler-purple"></div>
      </div>
      <Link to={props.link} className="onboarding-three-link">
        Skip
      </Link>
    </div>
  );
};

export default OnboardingThree;
