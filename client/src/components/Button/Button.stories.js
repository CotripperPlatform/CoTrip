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
  .add("Small Coral Button", () => (
    <Button text="Submit" color="coral" size="small" handleClick={handleClick} />
  ))
  .add("Normal Coral Button", () => (
    <Button text="Submit" color="coral" handleClick={handleClick} />
  ))
  .add("Large Coral Button", () => (
    <Button text="Submit" color="coral" size="large" handleClick={handleClick} />
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
  .add("Small Pink Button", () => (
    <Button text="Submit" color="pink" size="small" handleClick={handleClick} />
  ))
  .add("Normal Pink Button", () => <Button text="Submit" color="pink" handleClick={handleClick} />)
  .add("Large Pink Button", () => (
    <Button text="Submit" color="pink" size="large" handleClick={handleClick} />
  ))
  .add("Small Gold Button", () => (
    <Button text="Submit" color="gold" size="small" handleClick={handleClick} />
  ))
  .add("Normal Gold Button", () => <Button text="Submit" color="gold" handleClick={handleClick} />)
  .add("Large Gold Button", () => (
    <Button text="Submit" color="gold" size="large" handleClick={handleClick} />
  ));
