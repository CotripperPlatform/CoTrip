import React from "react";
import "./OnboardingParent.css";
import Logo from "../Logo/Logo.js";
import CarouselDots from "../CarouselDots/CarouselDots";

const OnboardingParent = props => {
  const statusChange = value => {
    console.log("Status Changed", value);
  };
  return (
    <div className="OnboardingParent">
      <div className="OnboardingParent__wrapper">
        <Logo className="OnboardingParent__logo" />
        {props.children}
        <div className="OnboardingParent__carousel-dots-container">
          <CarouselDots numberOfDots={3} activeLocation={3} border onStatusChange={statusChange} />
        </div>
      </div>
    </div>
  );
};

export default OnboardingParent;
