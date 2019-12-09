import React from "react";
import { storiesOf } from "@storybook/react";
import ProfilePicture from "./ProfilePicture";

storiesOf("ProfilePicture", module)
  .add("Extra Small with Link", () => <ProfilePicture type="extra-small" link />)
  .add("Small with Link", () => <ProfilePicture type="small" link />)
  .add("Medium with Link", () => <ProfilePicture type="medium" link />)
  .add("Large with Link", () => <ProfilePicture type="large" link />)
  .add("Extra-Small Static", () => <ProfilePicture type="extra-small" />)
  .add("Small Static", () => <ProfilePicture type="small" />)
  .add("Medium Static", () => <ProfilePicture type="medium" />)
  .add("Large Static", () => <ProfilePicture type="large" />);
