import React from "react";
import { storiesOf } from "@storybook/react";
import ImageCard from "./ImageCard";

storiesOf("ImageCard", module).add("Default", () => (
  <ImageCard url="https://wallpaperaccess.com/full/144067.jpg" text={["Hawaii", "May 2020"]} />
));
