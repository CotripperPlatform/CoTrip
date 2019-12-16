import React from "react";
import { shallow } from "enzyme";
import Button from "./Button.js";
import { findByTestAttribute } from "../../../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<Button {...props} />);
  return component;
};
describe("Button component", () => {
  let wrapper;
  let mockFunction;
  beforeEach(() => {
    mockFunction = jest.fn();
    const props = {
      text: "Submit",
      color: "pink",
      size: "large",
      textColor: "black",
      handleClick: mockFunction
    };
    wrapper = setUp(props);
  });
  it("Should render as expected", () => {
    const button = findByTestAttribute(wrapper, ".Button");
    expect(button.length).toBe(1);
  });
  it("Should emit callback on click event", () => {
    const button = findByTestAttribute(wrapper, ".Button");
    button.simulate("click");
    expect(mockFunction).toHaveBeenCalled();
  });
});
