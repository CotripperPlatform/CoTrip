import { configure, addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import StoryRouter from "storybook-react-router";
import requireContext from "require-context.macro";
import centered from "@storybook/addon-centered/react";
import "../src/App.css";

addDecorator(centered);
addDecorator(StoryRouter());

const newViewports = {
  xsmall: {
    name: 'teeny weeny devices',
    styles: {
      width: '320px',
      height: '480px',
    },
  },
  small: {
    name: 'small devices',
    styles: {
      width: '576px',
      height: '100%',
    },
  },
  medium: {
    name: 'medium devices',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  large: {
    name: 'large devices',
    styles: {
      width: '992px',
      height: '100%',
    },
  },
};

addParameters({
  viewport: { viewports: newViewports }
});

const req = requireContext("../src/", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
