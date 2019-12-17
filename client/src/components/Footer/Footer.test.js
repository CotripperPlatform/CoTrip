import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer.js";

describe("Footer component", () => {
  it("Should render without error", () => {
    const wrapper = shallow(<Footer />);
    const component = wrapper.find(".Footer");
    expect(component.length).toBe(1);
  });
  it("Should render all links", () => {
    const wrapper = shallow(<Footer />);
    const component = wrapper.find("a");
    expect(component.length).toBe(5);
  });
});
