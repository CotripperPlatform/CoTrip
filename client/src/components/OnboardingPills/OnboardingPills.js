import React from "react";
import "./OnboardingPills.css";
import Pill from "../Pill/Pill";

const OnboardingPills = props => {
  let classList = `OnboardingPills`;
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
    <div className={classList}>
      <div className="OnboardingPills__inner-container">{renderPills}</div>
    </div>
  );
};

export default OnboardingPills;
