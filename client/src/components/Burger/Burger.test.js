import React from "react";
import { shallow, configure } from "enzyme";
import Burger from "./Burger.js";
import { findByTestAttribute } from "../../../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<Burger {...props} />);
  return component;
};
describe("Burger component", () => {
  let wrapper;
  it("Should render with active true", () => {
    const props = {
      active: true
    };
    wrapper = setUp(props);
    const component = findByTestAttribute(wrapper, ".Burger--active");
    expect(component.length).toBe(1);
  });
  it("Should render with active false", () => {
    const props = {
      active: false
    };
    wrapper = setUp(props);
    const component = findByTestAttribute(wrapper, ".Burger");
    expect(component.length).toBe(1);
  });
  it("Should render without props", () => {
    const props = {
      active: null
    };
    wrapper = setUp(props);
    const component = findByTestAttribute(wrapper, ".Burger");
    expect(component.length).toBe(1);
  });
});
