import { configure, addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import requireContext from "require-context.macro";
import "../src/index.css";
import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  backgrounds: [
    { name: "CoTrip", value: "#FFCB08", default: true },
    { name: "CoTrip2", value: "#6A4C93" }
  ]
});
addDecorator(StoryRouter());

const req = requireContext("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
