import React from "react";
import { storiesOf } from "@storybook/react";
import InboxMessage from "./InboxMessage";
import Image from "assets/images/profile-picture-1.png";

storiesOf("InboxMessage", module).add("Default", () => (
  <InboxMessage
  // profilePic={Image}
  // name={"Raymond"}
  // message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."}
  />
));
