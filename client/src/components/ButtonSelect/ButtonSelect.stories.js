import React from "react";
import { storiesOf } from "@storybook/react";
import ButtonSelect from "./ButtonSelect";

function pillClick(value) {
  console.log(value);
  console.log("Storbook Component Received Callback");
}
let pills = ["Parenting", "Teens", "Arts", "Traveling", "Primary School", "Sports"];

pills = pills.map(val => {
  let pill = (
    <ButtonSelect
      active={true}
      text={val}
      size="Large"
      color="Pink"
      clickCallback={pillClick}
      width={"50%"}
      selectId={0}
    />
  );
  return <div className={"pill-padding"}>{pill}</div>;
});

storiesOf("ButtonSelect", module)
  .add("Onboarding Toggleable Pills", () => (
    <div className={"pillStorybook"}>
      <link
        href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap"
        rel="stylesheet"
      />
      {pills}
    </div>
  ))
  .add("Onboarding Next Button", () => (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap"
        rel="stylesheet"
      />
      <ButtonSelect
        text={"Next"}
        color="Pink"
        clickCallback={pillClick}
        width={"50%"}
        size="Small"
      />
    </div>
  ))
  .add("Button Small", () => (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap"
        rel="stylesheet"
      />
      <ButtonSelect
        text={"Button"}
        color={"blacks"}
        color="Pink"
        clickCallback={pillClick}
        width={"50%"}
        size="Small"
      />
    </div>
  ))
  .add("Button Medium", () => (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap"
        rel="stylesheet"
      />
      <ButtonSelect
        text={"Button"}
        color={"blacks"}
        size="Medium"
        color="Pink"
        clickCallback={pillClick}
        width={"50%"}
      />
    </div>
  ))
  .add("Button Large", () => (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap"
        rel="stylesheet"
      />
      <ButtonSelect
        text={"Button"}
        color={"blacks"}
        size="Large"
        color="Pink"
        clickCallback={pillClick}
        width={"50%"}
      />
    </div>
  ))
  .add("Button Heart", () => (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap"
        rel="stylesheet"
      />
      <ButtonSelect
        text={"Button"}
        color={"blacks"}
        icon
        size="Large"
        color="Pink"
        clickCallback={pillClick}
        width={"50%"}
      />
    </div>
  ))
  .add("Community People: DC Button Pink Heart Toggle With Offset", () => (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap"
        rel="stylesheet"
      />
      <ButtonSelect
        text={"Button"}
        color={"Purple"}
        icon
        active={true}
        iconOffset
        size="Large"
        clickCallback={pillClick}
        width={"50%"}
      />
    </div>
  ))
  .add("Button Pink Heart With Offset", () => (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap"
        rel="stylesheet"
      />
      <ButtonSelect
        text={"Button"}
        color={"blacks"}
        icon={"pink"}
        iconOffset
        size="Large"
        clickCallback={pillClick}
        width={"50%"}
      />
    </div>
  ));
