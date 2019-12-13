import React from "react";
import { shallow } from "enzyme";
import Logo from "./Logo.js";
import { findByTestAttribute } from "../../../../utils/utils";

describe("Logo component", () => {
  const setUp = props => {
    const component = shallow(<Logo {...props} />);
    return component;
  };
  it("Should render as expected", () => {
    const wrapper = setUp();
    const logo = findByTestAttribute(wrapper, ".Logo");
    expect(logo.length).toBe(1);
  });
  it("Should render with small prop", () => {
    const wrapper = setUp({ small: true });
    const logo = findByTestAttribute(wrapper, ".Logo--small");
    expect(logo.length).toBe(1);
  });
  it("Should render with clickable prop", () => {
    const wrapper = setUp({ clickable: true });
    const logo = findByTestAttribute(wrapper, "Link");
    expect(logo.length).toBe(1);
  });
  it("Should render with clickable prop", () => {
    const wrapper = setUp({ clickable: true });
    const logo = findByTestAttribute(wrapper, "Link");
    expect(logo.length).toBe(1);
  });
  it("Should render with 'to' prop", () => {
    const wrapper = setUp({ clickable: true, to: "About" });
    const logo = findByTestAttribute(wrapper, "Link");
    expect(logo.prop("to")).toEqual("About");
  });
  it("Should render with all props", () => {
    const wrapper = setUp({ clickable: true, to: "About", small: true });
    const logo = findByTestAttribute(wrapper, "Link");
    const small = findByTestAttribute(wrapper, ".Logo--small");
    expect(logo.prop("to")).toEqual("About");
    expect(small.length).toBe(1);
  });
});
