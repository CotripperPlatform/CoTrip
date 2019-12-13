import React from "react";
import { storiesOf } from "@storybook/react";
import NewUserUpload from "./NewUserUploadPicture"

const handleClick = e => {
  console.log("Clicked");
}; //from ../Button/Button.stories.js


storiesOf("New User Upload", module)
  .add("New User Upload", () => <NewUserUpload handleClick={handleClick}></NewUserUpload>)

