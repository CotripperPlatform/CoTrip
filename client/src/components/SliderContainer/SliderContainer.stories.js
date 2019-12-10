import React from "react";
import { storiesOf } from "@storybook/react";
import SliderContainer from "./SliderContainer";

storiesOf("SliderContainer", module)
  .add("Default", () => <SliderContainer />)
  .add("Custom props slider container", () => (
    <SliderContainer
      images={[
        {
          alt: "beach",
          url: "https://blog1.fkimg.com/wp-content/uploads/2017/07/Willemstad_TA4023579-768x519.jpg"
        },
        {
          alt: "other beach",
          url:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-833247510-1528401432.jpg?crop=1.00xw:0.755xh;0,0.208xh&resize=480:*"
        },
        {
          alt: "other vacay",
          url: "https://assets3.thrillist.com/v1/image/2764593/size/tl-full_width_tall_mobile.jpg"
        }
      ]}
      overview="This is an overview of a really fun trip I have planned. Definitely check it out. I bet you'd wanna go here."
      start_date="May 4 2020"
      end_date="May 14 2020"
      location="the best place"
    />
  ));
