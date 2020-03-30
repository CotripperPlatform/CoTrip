import React from "react";
import { storiesOf } from "@storybook/react";
import SplashPage from "./SplashPage";

export default {
  title: "Pages/SplashPage"
};

storiesOf("Pages/SplashPage", module).add("SplashPage", () => <SplashPage />);
