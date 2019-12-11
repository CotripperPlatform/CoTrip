import React from "react";
import "./OnboardingParent.css";
import Logo from "../Logo/Logo.js";
import CarouselDots from "../CarouselDots/CarouselDots";
// Class Based React Component
const OnboardingParent = props => {
  return (
    <div className="OnboardingParent">
      <div className="OnboardingParent__wrapper">
        <Logo />
        {props.children}
        <div className="test">
          <CarouselDots
            numberOfDots={3}
            activeLocation={3}
            border
            onStatusChange={() => props.statusChange}
          />
        </div>
      </div>
    </div>
  );
};

export default OnboardingParent;
