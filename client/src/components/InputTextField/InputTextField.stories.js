import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import InputTextField from './InputTextField';

//Props to be changed with Knobs add on
export const topic = {
  text: "text",
  favorite: true,
  hashtag: true
};

// Functions to be used by component
export const actions = {
  onStatusChange: action("Status Change")
};


storiesOf('InputTextField', module)
// addDecorator and "Default" story are needed to generate story that can be modified by Knobs addon
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Component topic={object("topic", { ...topic })} {...actions} />
  ))
// add component stories as ususal...
    .add('InputTextField', () =>{
      return <InputTextField />
    }
)
