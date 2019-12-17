import React from "react";
import { shallow } from "enzyme";
import Icon from "./Icon";

describe("Icon component", () => {
  it("should render as expected", () => {
    const component = shallow(<Icon icon={"coffee"} />);
    const wrapper = component.find("FontAwesomeIcon");
    expect(wrapper.length).toBe(1);
  });
});
