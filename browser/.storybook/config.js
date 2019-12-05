import { configure, addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import requireContext from "require-context.macro";
import "../src/index.css";

addDecorator(StoryRouter());

const req = requireContext("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
