import React from "react";
import "./OnboardingPills.css";
import Pill from "../Pill/Pill";

const OnboardingPills = props => {
  const renderPills = props.pills.map((pill, index) => {
    return (
      <Pill
        className="OnboardingPills__pill-container"
        key={index}
        text={pill}
        color={"pink"}
        active={false}
        inactiveColor={"white"}
        onClick={() => props.pillClick}
      />
    );
  });
  return (
    <div className="OnboardingPills">
      <div className="OnboardingPills__inner-container">{renderPills}</div>
    </div>
  );
};
OnboardingPills.defaultProps = {
  pills: [
    "Parenting",
    "Teens",
    "Arts",
    "Traveling",
    "Primary School",
    "Sports",
    "Meetups",
    "Secondary School",
    "Flights",
    "Infants",
    "Budgeting",
    "Health & Wellness"
  ]
};
export default OnboardingPills;
