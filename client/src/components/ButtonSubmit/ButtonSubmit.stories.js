import React from "react";
import { storiesOf } from "@storybook/react";
import ButtonSubmit from "./ButtonSubmit";
import { tsPropertySignature } from "@babel/types";

storiesOf("ButtonSubmit", module)
  .add("Followed", () => <ButtonSubmit type="followed" label="Followed" onSubmit></ButtonSubmit>)
  .add("Favorited", () => <ButtonSubmit type="favorited" label="Favorited" onSubmit></ButtonSubmit>)
  .add("Next", () => <ButtonSubmit type="next" label="Next" onSubmit></ButtonSubmit>);
