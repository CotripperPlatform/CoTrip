import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
const handleClick = e => {
  console.log("Clicked");
};
storiesOf("Button", module)
  .add("Small Default Button", () => (
    <Button text="Submit" size="small" handleClick={handleClick} />
  ))
  .add("Normal Default Button", () => <Button text="Submit" handleClick={handleClick} />)
  .add("Large Default Button", () => (
    <Button text="Submit" size="large" handleClick={handleClick} />
  ))
  .add("Small Pink Button", () => (
    <Button text="Submit" color="pink" size="small" handleClick={handleClick} />
  ))
  .add("Normal Pink Button", () => <Button text="Submit" color="pink" handleClick={handleClick} />)
  .add("Large Pink Button", () => (
    <Button text="Submit" color="pink" size="large" handleClick={handleClick} />
  ))
  .add("Small Purple Button", () => (
    <Button text="Submit" color="purple" size="small" handleClick={handleClick} />
  ))
  .add("Normal Purple Button", () => (
    <Button text="Submit" color="purple" handleClick={handleClick} />
  ))
  .add("Large Purple Button", () => (
    <Button text="Submit" color="purple" size="large" handleClick={handleClick} />
  ))
  .add("Small Red Button", () => (
    <Button text="Submit" color="red" size="small" handleClick={handleClick} />
  ))
  .add("Normal Red Button", () => <Button text="Submit" color="red" handleClick={handleClick} />)
  .add("Large Red Button", () => (
    <Button text="Submit" color="red" size="large" handleClick={handleClick} />
  ))
  .add("Small Yellow Button", () => (
    <Button text="Submit" color="yellow" size="small" handleClick={handleClick} />
  ))
  .add("Normal Yellow Button", () => (
    <Button text="Submit" color="yellow" handleClick={handleClick} />
  ))
  .add("Large Yellow Button", () => (
    <Button text="Submit" color="yellow" size="large" handleClick={handleClick} />
  ))
  .add("Small Outline Button", () => (
    <Button text="Submit" color="outline" size="small" handleClick={handleClick} />
  ))
  .add("Normal Outline Button", () => (
    <Button text="Submit" color="outline" handleClick={handleClick} />
  ))
  .add("Large Outline Button", () => (
    <Button text="Submit" color="outline" size="large" handleClick={handleClick} />
  ));
