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
      size={"Large"}
      color={"Pink"}
      clickCallback={pillClick}
      selectId={0}
    />
  ))
  .add("Pill with White Heart", () => (
    <Pill
      text={"Traveling"}
      size={"Medium"}
      color={"Pink"}
      icon={"white"}
      clickCallback={pillClick}
      selectId={0}
    />
  ))
  .add("Pill with Pink Heart Offset", () => (
    <Pill
      text={"Traveling"}
      size={"Large"}
      icon={"pink"}
      iconOffset
      clickCallback={pillClick}
      selectId={0}
    />
  ))
  .add("Community People Pill (Toggle)", () => (
    <Pill
      text={"Traveling"}
      size={"Large"}
      active={true}
      color={"Purple"}
      icon={"white"}
      iconOffset
      shadow
      clickCallback={pillClick}
      selectId={0}
    />
  ))
  .add("Hashtag Border Pill Purple", () => (
    <Pill
      text={"#hashtags"}
      size={"Large"}
      color={"Purple"}
      icon={"white"}
      iconOffset
      shadow
      border
      clickCallback={pillClick}
      selectId={0}
    />
  ))
  .add("Hashtag Border Pill Pink with Heart", () => (
    <Pill
      text={"#hashtags"}
      size={"Large"}
      color={"Pink"}
      icon={"pink"}
      shadow
      border
      clickCallback={pillClick}
      selectId={0}
    />
  ));
