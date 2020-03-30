import React from "react";
import { storiesOf } from "@storybook/react";
import BookATripPage from "./BookATripPage";
import Banner__pink from "assets/images/Banner__pink.png";

export default {
  title: "Pages/BookATripPage"
};

storiesOf("Pages/BookATripPage", module).add("Default", () => (
  <BookATripPage background={Banner__pink} />
));
