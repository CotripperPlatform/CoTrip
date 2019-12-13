import React from "react";
import { storiesOf } from "@storybook/react";
import FileUpload from "./FileUpload"

const handleClick = e => {
  console.log("Clicked");
}; //from ../Button/Button.stories.js

storiesOf("New User Upload", module)
  .add("New User Upload", () => <FileUpload handleClick={handleClick}></FileUpload>)

