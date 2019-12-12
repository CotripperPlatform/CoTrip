import React from "react";
import { storiesOf } from "@storybook/react";
import SignUpAd from "./SignUpAd";
import { tsPropertySignature } from "@babel/types";

const handleClick = e => {
  e.preventDefault();
  console.log("clicked");
};

storiesOf("SignUpAd", module).add("Default", () => (
  <SignUpAd onClick={handleClick}>
    <h2>Never Miss a Trip</h2>
    <h3>Sign up with your email address to recieve news and updates</h3>
  </SignUpAd>
));
