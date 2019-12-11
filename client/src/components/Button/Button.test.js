import React from "react";
import { shallow } from "enzyme";
import Button from "./Button.js";
import { findByTestAttribute } from "../../../../utils/utlis";

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
      text: "Test Text",
      color: "Test Color",
      size: "Test Size",
      textColor: "Test Text Color",
      handleClick: mockFunction
    };
    wrapper = setUp(props);
  });
  it("Should render as expected", () => {
    const button = findByTestAttribute(wrapper, "Button");
    expect(button.length).toBe(1);
  });
  it("Should emit callback on click event", () => {
    const button = findByTestAttribute(wrapper, "Button");
    button.simulate("click");
    const callback = mockFunction.mock.calls.length;
    expect(callback).toBe(1);
  });
});
