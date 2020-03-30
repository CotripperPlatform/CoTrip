import React from "react";
import { storiesOf } from "@storybook/react";
import OnboardingPills from "./OnboardingPills";

export default {
  title: "Atoms/OnboardingPills"
};

function onChange(val) {
  console.log(val);
}
storiesOf("Atoms/OnboardingPills", module).add("Default", () => (
  <OnboardingPills onChange={onChange} />
));
