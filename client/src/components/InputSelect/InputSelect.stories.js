import React from "react";
import { storiesOf } from "@storybook/react";
import InputSelect from "./InputSelect";

const handleSelect = props => {
  console.log(props);
};
storiesOf("Atoms/InputSelect", module)
  .add("Default", () => <InputSelect onSelect={handleSelect} />)
  .add("Options", () => (
    <InputSelect
      onSelect={handleSelect}
      optionPrefix={"Sort By:  "}
      options={[
        { value: "location", title: "Location" },
        { value: "date", title: "Date" },
        { value: "type", title: "Type" },
        { value: "Popularity", title: "Popularity" }
      ]}
    />
  ));
