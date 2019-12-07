import React from "react";
import { storiesOf } from "@storybook/react";
import InputSelect from "./InputSelect";

storiesOf("InputSelect", module)
  .add("Default", () => <InputSelect />)
  .add("Options", () => (
    <InputSelect options={["Sort By: Location", "Sort By: Date"]} onChange={alert("chosen!")} />
  ));
