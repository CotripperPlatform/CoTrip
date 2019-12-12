import React from "react";
import { storiesOf } from "@storybook/react";
import Pill from "./Pill";

function pillClick(val) {
  console.log(val);
}

storiesOf("Pill", module)
  .add("Onboarding Pill", () => (
    <Pill
      text={"Traveling"}
      active={false}
      size={"large"}
      color={"pink"}
      inactiveColor={"white"}
      onClick={pillClick}
      selectId={0}
    />
  ))
  .add("Pill with White Heart", () => (
    <Pill
      text={"Traveling"}
      size={"medium"}
      color={"pink"}
      icon={"white"}
      onClick={pillClick}
      selectId={0}
    />
  ))
  .add("Default Props", () => (
    <Pill
      onClick={pillClick}
    />
  ))
  .add("Pill with Pink Heart Offset", () => (
    <Pill
      text={"Traveling"}
      size={"large"}
      icon={"pink"}
      iconOffset
      onClick={pillClick}
      selectId={0}
    />
  ))
  .add("Community People Pill (Toggle)", () => (
    <Pill
      text={"Traveling"}
      size={"large"}
      active={true}
      color={"purple"}
      inactiveColor={"pink"}
      icon={"white"}
      iconOffset
      shadow
      onClick={pillClick}
      selectId={0}
    />
  ))
  .add("Hashtag Border Pill Purple", () => (
    <Pill
      text={"#hashtags"}
      size={"large"}
      color={"purple"}
      icon={"white"}
      iconOffset
      shadow
      border
      onClick={pillClick}
      selectId={0}
    />
  ))
  .add("Hashtag Border Pill Pink with Heart", () => (
    <Pill
      text={"#hashtags"}
      size={"large"}
      color={"pink"}
      icon={"pink"}
      shadow
      border
      onClick={pillClick}
      selectId={0}
    />
  ));
