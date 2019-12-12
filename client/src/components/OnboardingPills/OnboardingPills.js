import React from "react";
import "./OnboardingPills.css";
import Pill from "../Pill/Pill";

const pillList = [
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
];

const OnboardingPills = props => {
  let classList = `OnboardingPills`;
  const renderPills = pillList.map((pill, index) => {
    return <Pill className="OnboardingPills__pill-container" key={index} text={pill} />;
  });

  return (
    <div className={classList}>
      <div className="OnboardingPills__inner-container">{renderPills}</div>
    </div>
  );
};

export default OnboardingPills;
