import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import FavoritedCard from "./FavoritedCard";

export const topic = {
  text: "#hashtag",
  favorite: true,
  hashtag: true
};

export const actions = {
  onStatusChange: action("Status Change")
};

storiesOf("FavoriteCard", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <FavoritedCard topic={object("topic", { ...topic })} {...actions} />
  ))
  .add("Topic Card", () => <FavoritedCard topic={topic} {...actions} />);
