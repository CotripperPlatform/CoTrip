import React from "react";
import { storiesOf } from "@storybook/react";
import OnboardingPills from "./OnboardingPills";

let pillList = [
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

storiesOf("OnboardingPills", module).add("Default", () => <OnboardingPills pills={pillList} />);
