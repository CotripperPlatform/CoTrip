import React from "react";
import { shallow } from "enzyme";
import Logo from "./Logo.js";

describe("Logo component", () => {
  const setUp = props => {
    const component = shallow(<Logo {...props} />);
    return component;
  };
  it("Should render as expected", () => {
    const wrapper = setUp();
    const logo = wrapper.find(".Logo");
    expect(logo.length).toBe(1);
  });
  it("Should render with small prop", () => {
    const wrapper = setUp({ small: true });
    const logo = wrapper.find(".Logo--small");
    expect(logo.length).toBe(1);
  });
  it("Should render with clickable prop", () => {
    const wrapper = setUp({ clickable: true });
    const logo = wrapper.find("Link");
    expect(logo.length).toBe(1);
  });
  it("Should render with clickable prop", () => {
    const wrapper = setUp({ clickable: true });
    const logo = wrapper.find("Link");
    expect(logo.length).toBe(1);
  });
  it("Should render with 'to' prop", () => {
    const wrapper = setUp({ clickable: true, to: "About" });
    const logo = wrapper.find("Link");
    expect(logo.prop("to")).toEqual("About");
  });
  it("Should render with all props", () => {
    const wrapper = setUp({ clickable: true, to: "About", small: true });
    const logo = wrapper.find("Link");
    const small = wrapper.find(".Logo--small");
    expect(logo.prop("to")).toEqual("About");
    expect(small.length).toBe(1);
  });
});
