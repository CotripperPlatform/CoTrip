import React from "react";
import { storiesOf } from "@storybook/react";
import ButtonSubmit from "./ButtonSubmit";
import { tsPropertySignature } from "@babel/types";
import { actions } from "@storybook/addon-actions";

storiesOf("ButtonSubmit", module)
  .add("Followed", () => (
    <ButtonSubmit type="followed" label="Followed" onClick={actions("clicked")}></ButtonSubmit>
  ))
  .add("Favorited", () => (
    <ButtonSubmit type="favorited" label="Favorited" onClick={actions("clicked")}></ButtonSubmit>
  ))
  .add("Next", () => (
    <ButtonSubmit type="next" label="Next" onClick={actions("clicked")}></ButtonSubmit>
  ))
  .add("Finish", () => (
    <ButtonSubmit type="finish" label="Finish" onClick={actions("clicked")}></ButtonSubmit>
  ))
  .add("Register", () => (
    <ButtonSubmit type="register" label="Register" onClick={actions("clicked")}></ButtonSubmit>
  ))
  .add("Login", () => (
    <ButtonSubmit type="login" label="Login" onClick={actions("clicked")}></ButtonSubmit>
  ))
  .add("JoinTribe", () => (
    <ButtonSubmit
      type="joinTribe"
      label="Join the Tribe"
      onClick={actions("clicked")}
    ></ButtonSubmit>
  ))
  .add("Connect", () => (
    <ButtonSubmit type="connect" label="Connect" onClick={actions("clicked")}></ButtonSubmit>
  ))
  .add("Message", () => (
    <ButtonSubmit type="message" label="Message" onClick={actions("clicked")}></ButtonSubmit>
  ))
  .add("Join", () => (
    <ButtonSubmit type="join" label="Join" onClick={actions("clicked")}></ButtonSubmit>
  ))
  .add("Book", () => (
    <ButtonSubmit type="book" label="Book Now" onClick={actions("clicked")}></ButtonSubmit>
  ))
  .add("Follow", () => (
    <ButtonSubmit type="follow" label="Follow #hashtag" onClick={actions("clicked")}></ButtonSubmit>
  ))
  .add("Post", () => (
    <ButtonSubmit type="post" label="Post in Forum" onClick={actions("clicked")}></ButtonSubmit>
  ));
