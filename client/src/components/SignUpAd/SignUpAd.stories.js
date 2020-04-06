import React from "react";
import { storiesOf } from "@storybook/react";
import SignUpAd from "./SignUpAd";
import { tsPropertySignature } from "@babel/types";

const handleClick = e => {
  e.preventDefault();
  console.log("clicked");
};

storiesOf("Layout/SignUpAd", module).add("Default", () => (
  <SignUpAd
    onClick={handleClick}
    heading="Never Miss a Trip"
    subheading="Sign up with your email address to recieve news and updates"
  ></SignUpAd>
));
