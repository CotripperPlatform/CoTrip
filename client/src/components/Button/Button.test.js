import React from "react";
import { shallow } from "enzyme";
import Button from "./Button.js";
import { findByTestAttribute } from "../../../../utils/utlis";

const setUp = (props = {}) => {
  const component = shallow(<Button {...props} />);
  return component;
};
describe("Button component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render as expected", () => {
    const defaultClass = findByTestAttribute(component, "Button");
    expect(defaultClass.length).toBe(1);
    const defaultColorClass = component.find(".Button--color");
    expect(defaultColorClass.length).toBe(1);
    const defaultTextColorClass = component.find(".Button--textColor-text");
    expect(defaultTextColorClass.length).toBe(1);
    const defaultSizeClass = component.find(".Button--size");
    expect(defaultSizeClass.length).toBe(1);
    const defaultTypeClass = component.find(".Button--none");
    expect(defaultTypeClass.length).toBe(1);
  });
});
