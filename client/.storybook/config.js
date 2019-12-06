import { configure, addDecorator, addParameters } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import requireContext from "require-context.macro";
import centered from "@storybook/addon-centered/react";

addParameters({
  backgrounds: [
    { name: "CoTrip Background Gold", value: "#FFCB08", default: true },
    { name: "CoTrip Background Purple", value: "#6A4C93" }
  ]
});
addDecorator(centered);
addDecorator(StoryRouter());

const req = requireContext("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
