import React from "react";
import { storiesOf } from "@storybook/react";
import ModalContainer from "./_ModalContainer";

function handleEvent(evt) {
  evt.preventDefault();
  alert("Something Happens");
}

storiesOf("Modal", module)
  .add("Follow Modal", () => (
    <ModalContainer
      buttonText="Follow"
      buttonTextColor="black"
      buttonColor="yellow"
      buttonSize="large"
      message="Are you sure you want to follow?"
      confirmText="Follow"
      cancelText="Cancel"
      onConfirm={handleEvent}
    />
  ))
  .add("Join Modal", () => (
    <ModalContainer
      buttonText="Join"
      buttonTextColor="white"
      buttonColor="pink"
      buttonSize="small"
      message="Are you sure you want to join?"
      confirmText="Join"
      cancelText="Exit"
      onConfirm={handleEvent}
    />
  ));
