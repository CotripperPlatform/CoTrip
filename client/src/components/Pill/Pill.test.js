import React from "react";
import { shallow, configure } from "enzyme";
import Pill from "./Pill.js.js";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// We will describe a block of tests
describe("Pill component", () => {
  // we will write one individual test
  it("should render as expected", () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Pill />);
  });
});
