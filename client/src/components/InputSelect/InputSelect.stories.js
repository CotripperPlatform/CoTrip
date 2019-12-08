import React from "react";
import { storiesOf } from "@storybook/react";
import InputSelect from "./InputSelect";

const myfunction = () => {
  console.log("callback works");
};
storiesOf("InputSelect", module)
  .add("Default", () => <InputSelect />)
  .add("Options", () => (
    <InputSelect options={["Sort By: Location", "Sort By: Date"]} callback={myfunction} />
  ));
