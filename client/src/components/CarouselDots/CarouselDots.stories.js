import React from "react";
import { storiesOf } from "@storybook/react";
import CarouselDots from "./CarouselDots";

function statusChange(value) {
  console.log("Status Changed", value);
}

let style1 = {
  backgroundColor: "#FFCB08"
};
let style2 = {
  backgroundColor: "#FAFAFA"
};

let location = 1;

storiesOf("CarouselDots", module)
  .add("Onboarding Step 2", () => (
    <div style={style1}>
      <CarouselDots numberOfDots={5} activeLocation={location} onStatusChange={statusChange} />
    </div>
  ))
  .add("Without Border", () => (
    <div style={style2}>
      <CarouselDots numberOfDots={5} activeLocation={3} border onStatusChange={statusChange} />
    </div>
  ));
