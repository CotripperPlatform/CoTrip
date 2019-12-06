import React from "react";
import { shallow, configure } from "enzyme";
import Pill from "./Pill.js.js";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Pill component", () => {
  it("should render as expected", () => {
    const component = shallow(<Pill />);
  });
});
