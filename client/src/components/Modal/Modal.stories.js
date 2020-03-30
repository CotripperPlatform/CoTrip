import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./Modal";

function handleConfirm(evt) {
  evt.preventDefault();
  alert("Confirmed!");
}
function handleJoin(evt) {
  evt.preventDefault();
  alert("Joined!");
}
function handleClose(evt) {
  evt.preventDefault();
  alert("Modal Closed!");
}
function showModal(evt) {
  evt.preventDefault();
  alert("Modal Opened");
}

storiesOf("Modal", module)
  .add("Follow Modal", () => (
    <Modal
      message={"Are you sure you want to follow"}
      confirmText={"Confirm"}
      cancelText={"Cancel"}
      onConfirm={handleConfirm}
      onClose={handleClose}
      showModal={showModal}
    />
  ))
  .add("Join Modal", () => (
    <Modal
      message={"Are you sure you want to Join"}
      confirmText={"Join"}
      cancelText={"Cancel"}
      onConfirm={handleJoin}
      onCancel={handleClose}
      onClose={handleClose}
      showModal={showModal}
    />
  ));
