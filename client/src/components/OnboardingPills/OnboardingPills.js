import React, { Component } from "react";
import "./OnboardingPills.css";
import Pill from "../Pill/Pill";

class OnboardingPills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pills: this.props.pills.map(val => {
        let obj = {
          value: val,
          selected: false
        };
        return obj;
      })
    };
  }

  pillClicked = val => {
    let updateArray = this.state.pills;
    updateArray[val.selectId].selected = !val.active;
    this.setState(
      {
        pills: updateArray
      },
      () => {
        this.props.onChange(this.state.pills);
      }
    );
  };

  render() {
    const renderPills = this.state.pills.map((pill, index) => {
      return (
        <Pill
          key={index}
          onboarding
          text={pill.value}
          color={"pink"}
          active={false}
          inactiveColor={"white"}
          selectId={index}
          onClick={this.pillClicked}
        />
      );
    });
    return <div className="OnboardingPills">{renderPills}</div>;
  }
}

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
