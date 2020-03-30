import React from "react";
import { storiesOf } from "@storybook/react";
import MemberProfilePage from "./MemberProfilePage";

export default {
  title: "Pages/MemberProfilePage"
};

storiesOf("Pages/MemberProfilePage", module).add("Default", () => <MemberProfilePage />);
